export type IButtonProps = {
    text?: string,
    link?: string,
    target?: string,
    border?: BorderType,
    roundedness?: BorderRoundness,
    icon?: string,
    iconInvert?: boolean,
}

export enum BorderType {
    none = '',
    thin = 'border border-blue-400 m-1',
    thick = 'p-1 mr-1.5 mb-3 bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800'
}

export enum BorderRoundness {
    none = '',
    normal = 'rounded',
    medium = 'rounded-md',
    large = 'rounded-lg',
    full = 'rounded-full' 
}

export type ICardProps = {
	title: string,
	subtitle?: string,
	bulletPoints: string[],
	technologies: string[],
}

export type INavLinkProps = {
    href: string,
    title: string,
    navbarOpen: boolean,
    navbarCloseCallback: CallableFunction
}

export type IMenuOverlayProps = {
    links: MenuLink[],
    navbarOpen: boolean,
    navbarCloseCallback: CallableFunction
}

type MenuLink = {
    title: string,
    path: string,
}

export interface BadgeInterface {
    text: string;
    filled?: boolean;
}

export interface CardInterface {
    indicator?: string,
    badge?: BadgeInterface,
    title: string,
    subtitle?: string,
    body: string,
}