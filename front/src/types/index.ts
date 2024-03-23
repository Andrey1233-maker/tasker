export type TUser = {
    uuid: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export type TTable = {
    uuid: string;
    name: string;
    user: TUser;
    createdAt: string;
    updatedAt: string;
}