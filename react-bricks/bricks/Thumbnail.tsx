// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks'

interface ThumbnailProps {
    hasShadow: boolean,
    bgColor: types.IColor
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ hasShadow, bgColor, ...rest
}) => {
    return <div
        {...rest}
        className={`my-6 p-6 text-center border rounded-lg ${hasShadow ? 'shadow-xl' : ''
            } ${bgColor?.className}`}
    >    <Image
            propName="image"
            alt="Fallback alt tag"
            maxWidth={200}
            imageClassName="mb-6"
        />
        <Text
            propName="title"
            renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
            placeholder="Type a title..."
        />
        <RichText
            propName="description"
            renderBlock={({ children }) => (
                <p className="text-lg text-gray-500">{children}</p>
            )}
            placeholder="Type a description"
            allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Highlight,
            ]}
            renderHighlight={({ children }) => (
                <span className="px-1 rounded bg-blue-200 text-blue-900">
                    {children}
                </span>
            )}
        />
    </div>
}

Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        title: "Hello, world!",
        description: "Lorem ipsum dolor sit amet.",
        image: {
            src: "https://images.reactbricks.com/original/e370d071-5158-44e8-909a-d739d173eefc.jpg",
            placeholderSrc: "https://images.reactbricks.com/placeholder/e370d071-5158-44e8-909a-d739d173eefc.jpg",
            srcSet: "https://images.reactbricks.com/src_set/e370d071-5158-44e8-909a-d739d173eefc-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/e370d071-5158-44e8-909a-d739d173eefc-300.jpg 300w,\nhttps://images.reactbricks.com/src_set/e370d071-5158-44e8-909a-d739d173eefc-200.jpg 200w,\nhttps://images.reactbricks.com/src_set/e370d071-5158-44e8-909a-d739d173eefc-100.jpg 100w,\nhttps://images.reactbricks.com/src_set/e370d071-5158-44e8-909a-d739d173eefc-50.jpg 50w",
            alt: "placeholderimage",
            seoName: "pix"
        },
        hasShadow: true,
        bgColor: { color: '#ffffff', className: 'bg-white' }
    }),
    sideEditProps: [
        {
            name: 'hasShadow',
            label: 'Shadow',
            type: types.SideEditPropType.Boolean,
        },
        {
            name: 'bgColor',
            label: 'Background',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Color,
                options: [
                    {
                        label: 'White',
                        value: { color: '#ffffff', className: 'bg-white' },
                    },
                    {
                        label: 'Light blue',
                        value: { color: '#eff6ff', className: 'bg-blue-50' },
                    },
                ],
            }
        }
    ]
}

export default Thumbnail