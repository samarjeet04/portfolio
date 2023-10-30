import simplex_noise_3dGlsl from "./simplex_noise_3d.glsl";

// eslint-disable-next-line import/no-anonymous-default-export
export default /*GLSL*/ `
  ${simplex_noise_3dGlsl}
  uniform float u_time;
`;
