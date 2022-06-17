export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    token?: string;
    newToken?: string;
    message?: string;
}

export interface User {
    uid: string;
    name: string;
    email: string;
}