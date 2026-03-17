export class FDSConstant {
  public static readonly BaseUrl = 'http://localhost:4000/api' as const;
  public static readonly JwtTokenKey = 'TOKEN_KEY' as const;
  public static readonly RefreshTokenKey = 'REFRESH_TOKEN' as const;
}
