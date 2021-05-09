export abstract class IAuthStorage {
  abstract clear(): void;

  abstract getAccessToken(): string | null;

  abstract setAccessToken(accessToken: string): void;

  abstract removeAccessToken(): void;
}
