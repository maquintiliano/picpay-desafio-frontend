import { EnumBase } from "./EnumBase";

export class EnumFilter extends EnumBase {
constructor() {
    super([
        { value: 5, name: '5' },
        { value: 10, name: '10' },
        { value: 15, name: '15' }
    ]);
}
}