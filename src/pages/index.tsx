import React from "react"

import Head from "next/head"
import Marquee from "react-fast-marquee"

export default function Home() {
  const marqueeContent = ["COMING SOON +++ "]
  return (
    <div>
      <Head>
        <title>ÉTHÉRÉ</title>
        <meta
          name="viewport"
          id="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=10.0"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="components/PageTitleGlitch/PageTitleGlitch.jsx"
        ></script>
      </Head>

      <main className="justify-center bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 px-0 py-0">
        <div
          style={{
            borderBottom: "solid 3px #000",
            margin: "0px",
            padding: "0px",
            overflow: "hidden",
          }}
        >
          <div className="marquee">
            <div>
              <Marquee pauseOnHover={true} gradient={false} loop={0}>
                {marqueeContent.join(" ").repeat(100)}
              </Marquee>
            </div>
          </div>
        </div>
        <div>
          <div className="logo--active">
            <div className="logo__graphic" style={{ padding: "2vh" }}>
              <svg
                className="logo-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 381.4 92.715"
              >
                <path
                  fill="#000000"
                  d="M 148.7 92.715 L 126.2 92.715 L 126.2 89.415 Q 129.365 89.249 130.865 88.146 A 3.556 3.556 0 0 0 131.4 87.665 A 5.583 5.583 0 0 0 132.546 85.646 Q 132.881 84.633 132.95 83.365 Q 133.09 80.798 133.099 77.577 A 159.839 159.839 0 0 0 133.1 77.115 L 133.1 33.915 A 73.471 73.471 0 0 1 133.156 31 A 65.473 65.473 0 0 1 133.2 30.065 Q 133.3 28.215 133.4 26.715 L 129.8 26.915 L 126.2 27.115 L 126.2 22.715 L 148.7 22.715 L 148.7 26.015 A 13.782 13.782 0 0 0 146.896 26.174 Q 144.616 26.54 143.55 27.715 A 5.885 5.885 0 0 0 142.276 30.039 Q 142.01 30.94 141.95 32.015 A 87.606 87.606 0 0 0 141.859 34.167 Q 141.829 35.116 141.815 36.153 A 153.28 153.28 0 0 0 141.8 38.315 L 141.8 54.915 L 177.6 54.915 L 177.6 33.915 A 73.472 73.472 0 0 1 177.656 31 A 65.475 65.475 0 0 1 177.7 30.065 Q 177.8 28.215 177.9 26.715 L 174.3 26.915 L 170.7 27.115 L 170.7 22.715 L 193.2 22.715 L 193.2 26.015 A 13.782 13.782 0 0 0 191.396 26.174 Q 189.116 26.54 188.05 27.715 A 5.885 5.885 0 0 0 186.776 30.039 Q 186.51 30.94 186.45 32.015 A 87.606 87.606 0 0 0 186.359 34.167 Q 186.329 35.116 186.315 36.153 A 153.28 153.28 0 0 0 186.3 38.315 L 186.3 80.815 A 248.19 248.19 0 0 1 186.293 82.735 Q 186.287 83.491 186.276 84.173 A 130.847 130.847 0 0 1 186.25 85.465 A 37.82 37.82 0 0 1 186.193 86.81 Q 186.156 87.419 186.099 87.946 A 16.926 16.926 0 0 1 186 88.715 L 189.6 88.515 L 193.2 88.315 L 193.2 92.715 L 170.7 92.715 L 170.7 89.415 Q 173.865 89.249 175.365 88.146 A 3.556 3.556 0 0 0 175.9 87.665 A 5.583 5.583 0 0 0 177.046 85.646 Q 177.381 84.633 177.45 83.365 Q 177.59 80.798 177.599 77.577 A 159.839 159.839 0 0 0 177.6 77.115 L 177.6 58.915 L 141.8 59.315 L 141.8 80.815 A 248.19 248.19 0 0 1 141.793 82.735 Q 141.787 83.491 141.776 84.173 A 130.847 130.847 0 0 1 141.75 85.465 A 37.82 37.82 0 0 1 141.693 86.81 Q 141.656 87.419 141.599 87.946 A 16.926 16.926 0 0 1 141.5 88.715 L 145.1 88.515 L 148.7 88.315 L 148.7 92.715 Z M 38.1 66.815 L 34.8 66.815 Q 34.8 63.178 33.98 61.249 A 5.133 5.133 0 0 0 33.6 60.515 A 4.822 4.822 0 0 0 30.942 58.485 A 7.041 7.041 0 0 0 29.8 58.215 A 20.604 20.604 0 0 0 28.267 58.043 Q 26.035 57.87 22.9 58.015 L 15.6 58.315 L 15.6 81.215 Q 15.6 83.072 15.576 84.55 A 122.983 122.983 0 0 1 15.55 85.815 Q 15.5 87.715 15.3 89.015 L 34.4 88.715 Q 38.8 88.615 42 87.265 A 9.707 9.707 0 0 0 46.403 83.528 A 12.593 12.593 0 0 0 47 82.515 Q 48.8 79.115 48.8 73.215 L 52.2 73.215 L 51.6 92.715 L 0 92.715 L 0 89.415 Q 3.165 89.249 4.665 88.146 A 3.556 3.556 0 0 0 5.2 87.665 A 5.583 5.583 0 0 0 6.346 85.646 Q 6.681 84.633 6.75 83.365 Q 6.89 80.798 6.899 77.577 A 159.839 159.839 0 0 0 6.9 77.115 L 6.9 33.915 A 73.471 73.471 0 0 1 6.956 31 A 65.473 65.473 0 0 1 7 30.065 Q 7.1 28.215 7.2 26.715 L 3.6 26.915 L 0 27.115 L 0 22.715 L 48.1 22.715 L 48.6 40.215 L 45.3 40.215 Q 45.3 34.315 43.5 31.265 A 9.931 9.931 0 0 0 41.5 28.813 A 8.472 8.472 0 0 0 38.65 27.165 Q 35.865 26.207 32.455 26.207 A 24.907 24.907 0 0 0 31.8 26.215 L 23.2 26.415 A 17.356 17.356 0 0 0 21.383 26.553 Q 19.075 26.861 17.9 27.815 A 5.038 5.038 0 0 0 16.388 29.929 Q 16.1 30.66 15.967 31.547 A 9.27 9.27 0 0 0 15.95 31.665 A 30.802 30.802 0 0 0 15.765 33.411 Q 15.6 35.497 15.6 38.315 L 15.6 54.315 L 34.4 54.415 L 33.7 45.815 L 38.1 45.815 L 38.1 66.815 Z M 242.3 66.815 L 239 66.815 Q 239 63.178 238.18 61.249 A 5.133 5.133 0 0 0 237.8 60.515 A 4.822 4.822 0 0 0 235.142 58.485 A 7.041 7.041 0 0 0 234 58.215 A 20.604 20.604 0 0 0 232.467 58.043 Q 230.235 57.87 227.1 58.015 L 219.8 58.315 L 219.8 81.215 Q 219.8 83.072 219.776 84.55 A 122.983 122.983 0 0 1 219.75 85.815 Q 219.7 87.715 219.5 89.015 L 238.6 88.715 Q 243 88.615 246.2 87.265 A 9.707 9.707 0 0 0 250.603 83.528 A 12.593 12.593 0 0 0 251.2 82.515 Q 253 79.115 253 73.215 L 256.4 73.215 L 255.8 92.715 L 204.2 92.715 L 204.2 89.415 Q 207.365 89.249 208.865 88.146 A 3.556 3.556 0 0 0 209.4 87.665 A 5.583 5.583 0 0 0 210.546 85.646 Q 210.881 84.633 210.95 83.365 Q 211.09 80.798 211.099 77.577 A 159.839 159.839 0 0 0 211.1 77.115 L 211.1 33.915 A 73.471 73.471 0 0 1 211.156 31 A 65.473 65.473 0 0 1 211.2 30.065 Q 211.3 28.215 211.4 26.715 L 207.8 26.915 L 204.2 27.115 L 204.2 22.715 L 252.3 22.715 L 252.8 40.215 L 249.5 40.215 Q 249.5 34.315 247.7 31.265 A 9.931 9.931 0 0 0 245.7 28.813 A 8.472 8.472 0 0 0 242.85 27.165 Q 240.065 26.207 236.655 26.207 A 24.907 24.907 0 0 0 236 26.215 L 227.4 26.415 A 17.356 17.356 0 0 0 225.583 26.553 Q 223.275 26.861 222.1 27.815 A 5.038 5.038 0 0 0 220.588 29.929 Q 220.3 30.66 220.167 31.547 A 9.27 9.27 0 0 0 220.15 31.665 A 30.802 30.802 0 0 0 219.965 33.411 Q 219.8 35.497 219.8 38.315 L 219.8 54.315 L 238.6 54.415 L 237.9 45.815 L 242.3 45.815 L 242.3 66.815 Z M 367.3 66.815 L 364 66.815 Q 364 63.178 363.18 61.249 A 5.133 5.133 0 0 0 362.8 60.515 A 4.822 4.822 0 0 0 360.142 58.485 A 7.041 7.041 0 0 0 359 58.215 A 20.604 20.604 0 0 0 357.467 58.043 Q 355.235 57.87 352.1 58.015 L 344.8 58.315 L 344.8 81.215 Q 344.8 83.072 344.776 84.55 A 122.983 122.983 0 0 1 344.75 85.815 Q 344.7 87.715 344.5 89.015 L 363.6 88.715 Q 368 88.615 371.2 87.265 A 9.707 9.707 0 0 0 375.603 83.528 A 12.593 12.593 0 0 0 376.2 82.515 Q 378 79.115 378 73.215 L 381.4 73.215 L 380.8 92.715 L 329.2 92.715 L 329.2 89.415 Q 332.365 89.249 333.865 88.146 A 3.556 3.556 0 0 0 334.4 87.665 A 5.583 5.583 0 0 0 335.546 85.646 Q 335.881 84.633 335.95 83.365 Q 336.09 80.798 336.099 77.577 A 159.839 159.839 0 0 0 336.1 77.115 L 336.1 33.915 A 73.471 73.471 0 0 1 336.156 31 A 65.473 65.473 0 0 1 336.2 30.065 Q 336.3 28.215 336.4 26.715 L 332.8 26.915 L 329.2 27.115 L 329.2 22.715 L 377.3 22.715 L 377.8 40.215 L 374.5 40.215 Q 374.5 34.315 372.7 31.265 A 9.931 9.931 0 0 0 370.7 28.813 A 8.472 8.472 0 0 0 367.85 27.165 Q 365.065 26.207 361.655 26.207 A 24.907 24.907 0 0 0 361 26.215 L 352.4 26.415 A 17.356 17.356 0 0 0 350.583 26.553 Q 348.275 26.861 347.1 27.815 A 5.038 5.038 0 0 0 345.588 29.929 Q 345.3 30.66 345.167 31.547 A 9.27 9.27 0 0 0 345.15 31.665 A 30.802 30.802 0 0 0 344.965 33.411 Q 344.8 35.497 344.8 38.315 L 344.8 54.315 L 363.6 54.415 L 362.9 45.815 L 367.3 45.815 L 367.3 66.815 Z M 118.4 43.815 L 114.6 43.815 Q 114.526 39.432 113.899 36.153 A 25.504 25.504 0 0 0 113.4 34.015 Q 112.3 30.115 109.55 28.165 A 8.899 8.899 0 0 0 106.976 26.939 Q 104.914 26.311 102.101 26.311 A 26.085 26.085 0 0 0 101.6 26.315 L 93.1 26.315 L 93 80.815 A 248.19 248.19 0 0 1 92.993 82.735 Q 92.987 83.491 92.976 84.173 A 130.847 130.847 0 0 1 92.95 85.465 A 37.82 37.82 0 0 1 92.893 86.81 Q 92.856 87.419 92.799 87.946 A 16.926 16.926 0 0 1 92.7 88.715 Q 94.8 88.615 96.85 88.515 Q 98.9 88.415 101 88.315 L 101 92.715 L 77.5 92.715 L 77.5 89.415 Q 80.672 89.248 82.137 88.106 A 3.419 3.419 0 0 0 82.65 87.615 A 5.91 5.91 0 0 0 83.746 85.591 Q 84.012 84.765 84.111 83.779 A 11.377 11.377 0 0 0 84.15 83.265 Q 84.3 80.515 84.3 77.115 L 84.4 26.415 L 74.1 26.515 A 14.749 14.749 0 0 0 70.767 26.866 Q 68.574 27.376 67.031 28.623 A 8.248 8.248 0 0 0 65.2 30.715 A 13.827 13.827 0 0 0 63.774 33.978 Q 62.765 37.293 62.623 42.176 A 56.494 56.494 0 0 0 62.6 43.815 L 58.9 43.815 L 59.5 22.715 L 117.8 22.715 L 118.4 43.815 Z M 288.9 92.715 L 266.4 92.715 L 266.4 89.415 Q 269.565 89.249 271.065 88.146 A 3.556 3.556 0 0 0 271.6 87.665 A 5.583 5.583 0 0 0 272.746 85.646 Q 273.081 84.633 273.15 83.365 Q 273.29 80.798 273.299 77.577 A 159.839 159.839 0 0 0 273.3 77.115 L 273.3 33.915 A 73.471 73.471 0 0 1 273.356 31 A 65.473 65.473 0 0 1 273.4 30.065 Q 273.5 28.215 273.6 26.715 L 270 26.915 L 266.4 27.115 L 266.4 22.715 Q 272 22.615 277.75 22.515 A 220.766 220.766 0 0 1 281.589 22.482 A 223.741 223.741 0 0 1 289.3 22.615 A 74.928 74.928 0 0 1 294.996 22.878 Q 297.928 23.133 300.416 23.63 A 31.52 31.52 0 0 1 304.95 24.865 A 23.72 23.72 0 0 1 308.895 26.687 Q 311.075 27.966 312.604 29.616 A 13.339 13.339 0 0 1 313.7 30.965 A 15.064 15.064 0 0 1 316.279 37.496 A 19.911 19.911 0 0 1 316.5 40.515 Q 316.578 43.557 315.653 46.689 A 23.967 23.967 0 0 1 315.05 48.465 A 15.521 15.521 0 0 1 312.038 53.306 A 20.843 20.843 0 0 1 309.45 55.715 Q 306.48 58.062 301.6 59.549 A 44.571 44.571 0 0 1 297.8 60.515 A 13.539 13.539 0 0 1 300.77 63.383 A 15.842 15.842 0 0 1 301.3 64.115 Q 302.589 66.006 304.174 68.414 A 466.716 466.716 0 0 1 304.7 69.215 L 311.5 79.915 Q 313.2 82.615 314.8 84.765 A 13.384 13.384 0 0 0 317.115 87.2 A 11.789 11.789 0 0 0 318.5 88.165 A 8.481 8.481 0 0 0 321.013 89.141 Q 322.093 89.381 323.34 89.411 A 14.947 14.947 0 0 0 323.7 89.415 L 323.7 92.715 L 311.1 92.715 Q 308.2 90.115 306.25 87.515 Q 304.3 84.915 302.2 81.615 L 295.5 70.915 Q 294.383 69.111 293.007 66.826 A 571.206 571.206 0 0 1 292.55 66.065 A 21.86 21.86 0 0 0 290.372 63.03 A 18.187 18.187 0 0 0 288.8 61.415 Q 287.2 61.515 285.45 61.515 Q 283.7 61.515 282 61.415 L 282 80.815 A 248.19 248.19 0 0 1 281.993 82.735 Q 281.987 83.491 281.976 84.173 A 130.847 130.847 0 0 1 281.95 85.465 A 37.82 37.82 0 0 1 281.893 86.81 Q 281.856 87.419 281.799 87.946 A 16.926 16.926 0 0 1 281.7 88.715 Q 282.9 88.615 284.1 88.565 Q 285.3 88.515 286.5 88.415 Q 287.7 88.315 288.9 88.315 L 288.9 92.715 Z M 282 38.315 L 282 57.515 Q 283.6 57.615 285.05 57.715 Q 286.5 57.815 288.2 57.715 A 35.525 35.525 0 0 0 293.05 57.222 Q 295.631 56.769 297.833 55.922 A 21.425 21.425 0 0 0 297.85 55.915 Q 302 54.315 304.4 50.815 A 12.804 12.804 0 0 0 306.195 46.783 Q 306.8 44.477 306.8 41.615 A 23.254 23.254 0 0 0 306.584 38.367 Q 306.324 36.524 305.75 34.965 Q 304.7 32.115 302.5 30.215 A 12.676 12.676 0 0 0 299.555 28.336 A 17.233 17.233 0 0 0 296.9 27.365 Q 293.5 26.415 288.9 26.415 A 14.454 14.454 0 0 0 287.191 26.509 Q 285.304 26.735 284.23 27.503 A 3.496 3.496 0 0 0 283.75 27.915 A 5.389 5.389 0 0 0 282.488 30.098 Q 282.246 30.875 282.169 31.799 A 10.025 10.025 0 0 0 282.15 32.065 Q 282.047 33.887 282.015 36.158 A 152.237 152.237 0 0 0 282 38.315 Z M 38.2 7.815 L 23.7 16.715 L 21.5 13.815 L 34.1 1.815 Q 36.1 0.115 37.55 0.015 A 6.445 6.445 0 0 1 37.877 0.001 Q 38.867 -0.017 39.549 0.3 A 2.462 2.462 0 0 1 39.85 0.465 A 8.317 8.317 0 0 1 40.142 0.663 Q 40.719 1.072 40.8 1.315 Q 41.1 1.715 41.35 2.765 A 2.929 2.929 0 0 1 41.428 3.446 Q 41.428 4.222 41.05 5.115 A 3.403 3.403 0 0 1 40.518 5.959 Q 39.917 6.679 38.804 7.429 A 15.574 15.574 0 0 1 38.2 7.815 Z M 242.4 7.815 L 227.9 16.715 L 225.7 13.815 L 238.3 1.815 Q 240.3 0.115 241.75 0.015 A 6.445 6.445 0 0 1 242.077 0.001 Q 243.067 -0.017 243.749 0.3 A 2.462 2.462 0 0 1 244.05 0.465 A 8.317 8.317 0 0 1 244.342 0.663 Q 244.919 1.072 245 1.315 Q 245.3 1.715 245.55 2.765 A 2.929 2.929 0 0 1 245.628 3.446 Q 245.628 4.222 245.25 5.115 A 3.403 3.403 0 0 1 244.718 5.959 Q 244.117 6.679 243.004 7.429 A 15.574 15.574 0 0 1 242.4 7.815 Z M 367.4 7.815 L 352.9 16.715 L 350.7 13.815 L 363.3 1.815 Q 365.3 0.115 366.75 0.015 A 6.445 6.445 0 0 1 367.077 0.001 Q 368.067 -0.017 368.749 0.3 A 2.462 2.462 0 0 1 369.05 0.465 A 8.317 8.317 0 0 1 369.342 0.663 Q 369.919 1.072 370 1.315 Q 370.3 1.715 370.55 2.765 A 2.929 2.929 0 0 1 370.628 3.446 Q 370.628 4.222 370.25 5.115 A 3.403 3.403 0 0 1 369.718 5.959 Q 369.117 6.679 368.004 7.429 A 15.574 15.574 0 0 1 367.4 7.815 Z"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="px-5 text-center text-4xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-6xl">
            Coming Soon
          </h1>
          <h2 className="mx-auto mt-8 max-w-4xl px-10 text-center text-base tracking-tight text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            an upcoming design workshop based in Berlin.
          </h2>
        </div>
        <div>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            earum provident nisi quis atque, velit nobis dignissimos
            perspiciatis iusto tenetur eos. Voluptatum, quae unde sit
            necessitatibus error eum earum sint fugiat, vel nisi non culpa quod
            quas! Velit dolor iure placeat adipisci suscipit aliquam esse
            consequuntur animi. Aliquam nobis corrupti sint quibusdam sed nam,
            voluptates perspiciatis natus cupiditate accusantium impedit nihil
            vero ipsa eum accusamus enim obcaecati fugit quaerat aperiam,
            repudiandae corporis animi dolorum at. Dicta dolore tempora pariatur
            natus voluptatibus. Impedit amet repellendus, et, inventore tempora
            molestias esse ex laboriosam magnam pariatur vel minima ipsam
            aperiam eius hic vitae, nesciunt architecto quae labore dignissimos?
            Velit omnis in quibusdam adipisci. Provident iusto magnam libero ex
            nulla exercitationem laborum veritatis doloribus saepe expedita
            nihil id doloremque corrupti, consectetur sit qui, dolorem
            repellendus. Dolor, cumque rerum culpa id animi ut aliquid. Minus,
            nam pariatur libero officiis reiciendis ex officia delectus
            molestias tempore doloribus deserunt esse quasi debitis, aliquam eum
            inventore cumque? Culpa temporibus expedita consequuntur eum fuga
            exercitationem magnam, minima atque sapiente esse recusandae cum.
            Rerum exercitationem aspernatur molestiae? Nulla delectus
            temporibus, deserunt optio debitis placeat? Fugit veritatis quae
            eius ratione eaque error rem ea facilis? Recusandae esse illum sit
            tenetur debitis officiis eum alias nisi excepturi, culpa eos nulla
            eaque aliquam assumenda labore voluptas ipsam incidunt dicta
            distinctio. Deleniti dolores repellendus, non a porro laboriosam eos
            impedit harum voluptas ratione aut voluptates incidunt. Porro
            consequatur assumenda tempora vitae architecto consequuntur sapiente
            mollitia quos excepturi illo. Dicta unde accusamus, autem rerum
            delectus beatae quas officiis praesentium veniam explicabo ad
            molestias iure laudantium tenetur amet quidem? Quisquam facere in
            sunt a doloribus, aliquid pariatur ea numquam maxime provident
            delectus qui sit adipisci consequuntur explicabo cum temporibus
            consectetur sed assumenda necessitatibus quidem perspiciatis debitis
            itaque. Aliquam ex id autem praesentium assumenda. Natus sequi
            provident reiciendis explicabo. Atque, culpa minima sunt velit in
            odio. Totam dolorum modi recusandae tempora architecto explicabo
            commodi cupiditate facilis numquam deleniti. Saepe corrupti velit
            dignissimos dolorum repellendus, aut incidunt. Eveniet dolore
            tempore dolorem ducimus omnis qui consequatur obcaecati assumenda
            rerum corporis eius minus doloribus libero vero, quis error.
            Necessitatibus, pariatur temporibus dolore error unde quibusdam
            voluptates architecto voluptas deleniti iste tenetur rerum in, ipsa
            veritatis ea! Explicabo doloremque perspiciatis eius porro nostrum,
            nesciunt necessitatibus deserunt voluptatum ab inventore
            reprehenderit temporibus itaque, sed distinctio libero cupiditate
            voluptas aspernatur sapiente tempora fuga aliquid nihil excepturi
            repellendus. Ipsa voluptates aspernatur provident omnis assumenda,
            aut pariatur quibusdam animi suscipit molestias neque sapiente
            blanditiis, id nam. Obcaecati fugit, vitae modi ut explicabo
            doloremque quis alias, porro sapiente expedita molestias velit sint,
            accusantium atque recusandae quia aliquam necessitatibus rem iusto
            facilis unde aspernatur sunt! Praesentium repellat molestiae eius
            numquam nostrum eaque consequuntur mollitia laudantium perferendis.
            Debitis odio minus numquam voluptates aut! Dicta quia inventore
            alias, et sit quod officiis debitis itaque, similique cupiditate
            velit praesentium molestias doloribus dolor doloremque quas
            aspernatur quasi cumque iste. Quae molestias dolores nam magni culpa
            aspernatur! Voluptas sed animi aliquam beatae deserunt, suscipit
            incidunt pariatur consectetur. Nesciunt veritatis harum minima
            numquam molestias impedit placeat amet, in quas magnam expedita
            reiciendis ducimus et mollitia labore ipsam. Veritatis dignissimos
            magnam harum quos iusto recusandae provident assumenda ipsam
            mollitia obcaecati laborum debitis error delectus totam dolorem
            quisquam officia odio hic optio praesentium, expedita quis enim.
            Repudiandae porro dicta enim eligendi, magnam excepturi, iure
            aliquid alias est ratione dolores, eveniet aspernatur aperiam
            reprehenderit dolore debitis distinctio similique dolor tempore.
            Accusamus facilis numquam delectus tenetur dolor! Totam facere rem
            nulla voluptatibus molestiae laborum aperiam esse! Ad molestias
            nesciunt dignissimos sint quos maxime labore architecto dolore
            dolorem magni neque qui optio eum est similique, laboriosam pariatur
            tempora illum quae amet totam, sequi fugit, iusto voluptatem. Animi
            maxime, quidem illum culpa libero sequi ut necessitatibus labore
            sapiente vitae facilis, commodi iusto tempore! Dicta vel quisquam
            ullam, praesentium vero consequuntur quo perspiciatis et, quos iure
            voluptatem maiores possimus aliquam aliquid voluptates quidem
            mollitia amet aspernatur unde. Facere suscipit tempora, qui
            assumenda veniam hic non enim voluptate obcaecati quasi quia
            praesentium iure delectus sapiente odit excepturi ex quod natus sit
            vitae? Blanditiis rerum vitae officia tenetur, magnam quam tempore a
            iure ex neque explicabo nihil quo, consequatur repellendus odit
            reprehenderit molestias harum est, eos repudiandae vero? Impedit
            dolore sapiente consequuntur nesciunt voluptas hic ea mollitia id,
            quaerat voluptatibus commodi soluta adipisci placeat recusandae,
            accusamus doloremque? Inventore alias similique adipisci aut dolorum
            tenetur ipsum mollitia, quis officiis saepe magnam praesentium,
            vitae iste reiciendis nisi suscipit quod! Ducimus, similique
            voluptatem optio cupiditate doloremque numquam saepe molestias iste
            nemo provident quas ea, illum error vel qui aperiam. Excepturi
            laudantium cum itaque dicta eum, deserunt accusamus vitae
            dignissimos tempore, incidunt expedita iure veritatis suscipit
            facilis! Eius rem fugit debitis, earum laudantium exercitationem et
            numquam, quod suscipit quas ut provident quos qui ratione facere
            dolor excepturi obcaecati corrupti fugiat! Tenetur sapiente fugiat
            laboriosam ipsam esse, voluptatum quos officiis atque consequuntur
            soluta praesentium asperiores animi earum assumenda id vero
            quibusdam corporis illum cumque veniam, voluptas aliquid ut! Nobis
            libero ab qui maxime quisquam molestiae illo. Consequuntur nisi
            earum alias deserunt ratione esse molestiae voluptatem, optio sint
            harum temporibus facere a vitae provident consectetur fuga ipsum
            quod quos possimus beatae soluta laborum suscipit? Totam quisquam
            eveniet sapiente doloremque suscipit tempora modi pariatur ex amet,
            enim explicabo quo tenetur animi ipsam minus eum debitis earum!
            Reprehenderit reiciendis error tempore, beatae officia ad iure alias
            sunt, nobis porro libero nemo rem sit distinctio dolore cum impedit
            eos nam quis. Blanditiis vitae tempora possimus quo nobis impedit
            vero ex, corporis numquam. Quas sapiente vel omnis. Aliquam aperiam
            neque, delectus culpa numquam sint molestias perferendis dolore
            deserunt impedit corrupti expedita error modi esse? Hic, molestiae
            accusantium, quas velit ratione provident ea cum incidunt minima
            optio perspiciatis fugiat id, laboriosam quae neque aperiam a iure.
            Dicta ab iusto, nam ipsam alias non fuga sed officiis, possimus
            adipisci unde sunt modi cum facere itaque quos impedit excepturi
            consequatur quam magnam. In assumenda earum rerum saepe magni.
            Expedita nemo officiis perferendis et nisi vero totam. Eveniet
            mollitia facere sit earum repudiandae quia illum excepturi?
          </h1>
        </div>
      </main>
    </div>
  )
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="space-y-5 px-12 py-12">{children}</ul>
}

function Feature({ children, main }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="hiddden hidden h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:inline" />
      <p className="ml-3 hidden text-lg text-gray-600 sm:inline">{children}</p>

      <p className="mx-auto sm:hidden">
        <InfoText text={main} />
      </p>
    </li>
  )
}

function InfoText({ text }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-3 py-2 font-medium text-gray-700">
      <CheckIcon className="mr-3 inline-flex h-5 w-5 flex-shrink-0 rounded-full bg-blue-600 p-1 text-gray-100 sm:hidden" />
      {text}
    </span>
  )
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
