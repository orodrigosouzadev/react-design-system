import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@orodrigosouzadev-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis minima deleniti error placeat eveniet consequatur fuga accusamus tenetur ex delectus velit eaque, labore ipsa voluptatum saepe laboriosam repellat commodi.'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
