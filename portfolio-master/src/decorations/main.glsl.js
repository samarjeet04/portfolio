// eslint-disable-next-line import/no-anonymous-default-export
export default /*GLSL*/ `
  float height = snoise(
    vec3(
      position.x * 0.25 * sin(u_time * 2.0),
      position.y * 0.25 * sin(u_time * 2.0),
      position.z * 0.25 * sin(u_time * 2.0)
      )
  );
  vec3 displacedPosition = position + normal * height;
        
  vec3 transformed = displacedPosition;
`;
