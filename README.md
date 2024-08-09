# Framer Motion Animations

## About This Project 🚀
Discovering amazing animations 🌟 with Framer Motion.

## Technologies 🛠️
- `React`
- `Framer Motion`
- `tailwindcss`

## zoom parallax 1
###  Process
1.  I was inspired by a YouTube video showcasing a cool parallax effect.
2.  Without seeing the code, I tried to create the animation on my own. It took me about two days, and I encountered many errors. In the end, my initial attempt was only about 65% similar to the original effect.
3. I then went back to the video, watched it completely, and fully understood the process.
4. With this new understanding, I successfully recreated the parallax effect.

### How it works
1. I created a parent element with a height of 300vh.
2. Inside the parent element, I created a sticky gallery container  (position: sticky), with a height of 100vh, which will stick for 200vh as you scroll.
3. Within the sticky gallery container, I placed our images. Each image is inside a div element that is positioned absolutely within the gallery container, occupying the full height and width.
4. When the top of the parent element intersects with the top of the viewport, the zoom effect starts.
5. Instead of scaling the images directly (which would mess up the layout), we scale the absolutely positioned element to maintain the layout as it is.


## Demo 📸 

## Zoom Parallax 1
[demo](https://github.com/user-attachments/assets/0b392b37-3835-4719-8701-04b74283c835)

