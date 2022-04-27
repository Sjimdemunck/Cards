import React from 'react';

export interface IUser {
    id: string,
    username: string,
    roles?: string[],
    person: IPerson,
    mode: string,
}

export interface IPerson {
    firstname: string,
    age: number,
    gender: string,
    Avatar: string,
}
