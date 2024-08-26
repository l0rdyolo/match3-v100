export interface IGrid<T>{
    grid : T[][],
    width : number,
    height : number,
    Generate(args?:any) : T[][],
}

