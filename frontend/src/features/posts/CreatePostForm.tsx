import { useState, ChangeEvent, FormEvent, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ImageIcon, SendIcon, X } from 'lucide-react'

export default function CreatePostForm() {
  const [content, setContent] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitting:', { content, image })
    setContent('')
    setImage(null)
    setImagePreview(null)
  }

  return (
    <Card className="w-full mx-auto ">
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="flex-grow min-h-[100px]"
              required
            />
          {imagePreview && (
            <div className="mt-5 relative w-fit ">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-20 max-h-20 h-auto  "
                style={{ maxHeight: '200px' }}
              />
              <Button onClick={()=>{
                setImage(null)
                setImagePreview(null)
              }} className=' absolute -top-6 -right-7 rounded-full text-xs ' type="button" variant="secondary"  size="icon" > <X className='text-slate-800 ' /> </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={ref}
              aria-label="Upload an image"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <Button onClick={()=> ref.current?.click() } type="button" variant="outline" size="icon">
                <ImageIcon className="h-4 w-4" />
                <span className="sr-only">Upload an image</span>
              </Button>
            </label>
          </div>
          <Button type="submit" className="px-6">
            <SendIcon className="h-4 w-4 mr-2" />
            Post
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}