import simplex_noise_3dGlsl from "./simplex_noise_3d.glsl";

export const VS = `
uniform float u_time;
uniform sampler2D u_water;
varying float height;
varying vec3 normalInterp;
varying vec3 pos;
varying vec2 vuv;
varying float vAmount;
varying float time;

${simplex_noise_3dGlsl}

void main() {
  vec3 p = position;
  vuv = uv;
  time = u_time;
  mat4 boilerplate = projectionMatrix * modelViewMatrix;
  // vec3 heightData = texture2D(u_heightmap, uv).rgb;
  // vAmount = heightData.x;
  // height = heightData.x + heightData.y + heightData.z;
  // height = ((heightData.x * 256.0 * 256.0 + heightData.y * 256.0 + heightData.z) * 0.1) - 55.0;

  height = snoise(
    vec3(
      position.x * 0.25 * sin(u_time * 0.5),
      position.y * 0.25 * sin(u_time * 0.5),
      position.z * 0.25 * sin(u_time * 0.5)
      )
  );

  vec3 newP = p + normal * height;
  vec3 newNormal = normal + vec3(height);
  vec4 pos4 = modelViewMatrix * vec4(newP, 1.0);
  normalInterp = newNormal;
  pos = vec3(pos4) / pos4.w;
  gl_Position = boilerplate * vec4(newP, 1.0);
}
`;

export const FS = `
varying vec3 normalInterp;
varying float height;
varying vec3 pos;
varying float vAmount;
varying vec2 vuv;
varying float time;

const vec3 ambientColor = vec3(0.0, 0.0, 0.0);
const vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

${simplex_noise_3dGlsl}

void main() {
  vec3 lightPos1 	= vec3(-200.0 * sin(time * 3.0), -200.0 * sin(time * 3.0), 0);
  vec3 lightColor1 	= vec3(0.3176, 0.5686, 0.8352);
  
  vec3 lightPos2 	= vec3(-200.0 * sin(time * 3.0), 200.0 * sin(time * 3.0), 0);
  vec3 lightColor2 	= vec3(0.8274, 0.0705, 0.5921);
  
  vec3 normal = mix(normalize(normalInterp), normalize(cross(dFdx(pos), dFdy(pos))), 0.8);
 
  vec3 lightDir1 = normalize(lightPos1 - pos);
  float lambertian1 = max(dot(lightDir1,normal), 0.0);
  float specular1 = 0.0;
  if(lambertian1 > 0.0) {
    vec3 viewDir = normalize(-pos);
    vec3 halfDir1 = normalize(lightDir1 + viewDir);
    float specAngle1 = max(dot(halfDir1, normal), 0.0);
    specular1 = pow(specAngle1, 16.0);
  }

  vec3 lightDir2 = normalize(lightPos2 - pos);
  float lambertian2 = max(dot(lightDir2,normal), 0.0);
  float specular2 = 0.0;
  if(lambertian2 > 0.0) {
    vec3 viewDir = normalize(-pos);
    vec3 halfDir2 = normalize(lightDir2 + viewDir);
    float specAngle2 = max(dot(halfDir2, normal), 0.0);
    specular2 = pow(specAngle2, 16.0);
  }

  gl_FragColor = vec4(ambientColor 
    + lambertian2 * diffuseColor + specular2 * lightColor2 * 3.0
    + lambertian1 * diffuseColor + specular1 * lightColor1 * 3.0
    , 1.0);
}`;
