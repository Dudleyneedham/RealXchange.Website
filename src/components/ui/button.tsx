import { cva, type VariantProps } from 'class-variance-authority';
import { BaseButton, BaseButtonProps } from './base-button';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center gap-5 rounded-3xl', {
  variants: {
    variant: {
      default:
        'bg-foreground text-primary-light hover:bg-foreground/90 font-medium disabled:opacity-50 disabled:pointer-events-none transition-colors',
      primary: 'bg-primary text-primary-light hover:bg-primary/90 font-medium',
      plain: 'gap-2 hover:border-b duration-300 hover:border-foreground/80 rounded-none'
    },
    size: {
      default: 'py-4 px-5 text-[0.875rem]/[1.25rem] w-[225px]',
      text: 'text-[1.5rem]/[1.5rem] p-1 px-0 hover:text-foreground/80'
    },
    fullWidth: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

export interface ButtonProps
  extends BaseButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ variant, size, fullWidth, className, ...props }: ButtonProps) => {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
    />
  );
};

Button.displayName = 'Button';

export { Button, buttonVariants, BaseButton };
