export default (): {
  PORT: number;
  JWT_SECRET: string;
} => {
  return {
    PORT: Number(process.env.PORT) || 4000,
    JWT_SECRET: String(process.env.JWT_SECRET) || '',
  };
};
