const NEVER = new Promise<any>(empty);

export function identity<T>(v: T): T {
    return v;
}

export function empty() {}

export function emptyArray(): any[] {
    return [];
}

export function emptyObject(): object {
    return {};
}

export function alwaysFalse(): boolean {
    return false;
}

export function alwaysZero(): number {
    return 0;
}

export function alwaysPending(): Promise<any> {
    return NEVER;
}
