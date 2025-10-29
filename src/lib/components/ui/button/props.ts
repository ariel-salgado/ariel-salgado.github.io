export const base_style = 'outline-none rounded-md flex items-center justify-center gap-x-2 cursor-pointer font-medium text-base whitespace-nowrap transition-colors duration-300';

export const variants = {
	primary:
		'bg-primary text-primary-foreground hover:bg-primary/90 focus-within:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
	secondary:
		'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-within:bg-secondary/90 hover:ring-2 hover:ring-secondary hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 focus-within:ring-offset-background',
	accent:
		'bg-accent text-accent-foreground hover:bg-accent/90 focus-within:bg-accent/90 hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background',
	muted:
		'bg-muted text-muted-foreground hover:bg-muted/90 focus-within:bg-muted/90 hover:ring-2 hover:ring-muted hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-muted focus-within:ring-offset-2 focus-within:ring-offset-background',
	destructive:
		'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-within:bg-destructive/90 hover:ring-2 hover:ring-destructive hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-destructive focus-within:ring-offset-2 focus-within:ring-offset-background',
	outline:
		'border border-foreground text-foreground bg-transparent hover:bg-foreground/10 focus-within:bg-foreground/10 hover:ring-2 hover:ring-foreground hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background',
	ghost:
		'bg-transparent text-foreground hover:bg-foreground/10 focus-within:bg-foreground/10 hover:ring-2 hover:ring-foreground hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background',
	glass:
		'bg-foreground/20 backdrop-blur-md text-foreground hover:bg-foreground/30 focus-within:bg-foreground/30 hover:ring-2 hover:ring-foreground hover:ring-offset-2 hover:ring-offset-background focus-within:ring-2 focus-within:ring-foreground focus-within:ring-offset-2 focus-within:ring-offset-background',
};

export const sizes = {
	sm: 'h-8 px-3 text-sm',
	md: 'h-10 px-5 text-base',
	lg: 'h-12 px-7 text-lg',
	icon: 'size-10 rounded-full aspect-square',
};

type ButtonVariants = keyof typeof variants;
type ButtonSizes = keyof typeof sizes;

export type ButtonOptions = Partial<{
	variant: ButtonVariants;
	size: ButtonSizes;
}>;
