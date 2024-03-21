export type IButtonProps = {
    text?: string,
    link?: string,
    buttonClasses?: string[],
    icon?: string,
    iconClasses?: string[],
    target?: string,
    roundedness?: string,
}

export type ICardProps = {
	title: string,
	subtitle: string,
	bulletPoints: string[],
	technologies: string[],
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