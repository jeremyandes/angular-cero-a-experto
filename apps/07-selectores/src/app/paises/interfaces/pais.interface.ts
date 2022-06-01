export interface Pais {
    name: Name;
    cca3: string;
}

interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

interface NativeName {
    spa: SPA;
}

interface SPA {
    official: string;
    common: string;
}
