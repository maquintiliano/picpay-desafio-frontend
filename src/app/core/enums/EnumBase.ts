import { EnumBaseType } from "src/app/shared/shared/types/enum-base.type";

export class EnumBase {
    private _enum: EnumBaseType[];

    constructor(enumParam: EnumBaseType[]) {
        this._enum = enumParam;
    }

    public getAllForSelect(): EnumBaseType[] {
        const list = [...this._enum];
        list.unshift(({ name: 'Selecione', value: ''}));
        return list;
    }
}