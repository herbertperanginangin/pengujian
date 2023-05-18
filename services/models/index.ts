export interface EventModel {
    id: string;
    nama_acara: string;
    harga: string;
    deskripsi: string;
    img_url: string;
    tanggal_acara: string
}

export interface JWTPayloadTypes {
    id: number;
    nama: string;
    email: string;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface TransaksiTypes {
    user_id : number;
    acara_id : number;
    total : number;
}

export interface UserTypes {
    id: number;
    nama: string;
    email: string;
}