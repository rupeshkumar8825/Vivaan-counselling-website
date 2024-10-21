
// here we will be storing all the interfaces for the application that we will be using
export interface IRoute {
    path : string, 
    component : JSX.Element
}


export interface IDropDownMenu {
    menuName : string, 
    subMenuList : string[]
    routesList : string[]
}