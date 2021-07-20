import { Disclosure } from '@headlessui/react'
import Accordion from '../components/Accordion'

export default function Example() {
  return (
    <div className="w-full pt-16">
      <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="accordion-container mx-auto py-6 bg-white px-8">
        <div>
          <Accordion
            title="What is your refund policy?"
            content="If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked."
          />
          <Accordion
            title="How do I create an account?"
            content="Lorem ipsum dolor sit amet, consectetur adipis 😂😂"
          />
          <Accordion
            title="How to contact with the Customer Service?"
            content="Customer service is not available! 🙃"
          />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <svg
          width="386"
          height="356"
          className="p-10 md:p-0"
          viewBox="0 0 286 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M279.923 172.064C279.97 202.159 269.993 231.412 251.567 255.206H36.1764C17.7502 231.412 7.77321 202.159 7.82023 172.064C7.82023 96.9242 68.7348 36.0157 143.875 36.0157C219.014 36.0157 279.923 96.9262 279.923 172.064Z"
            fill="white"
          />
          <path
            opacity="0.1"
            d="M279.923 172.064C279.97 202.159 269.993 231.412 251.567 255.206H36.1764C17.7502 231.412 7.77321 202.159 7.82023 172.064C7.82023 96.9242 68.7348 36.0157 143.875 36.0157C219.014 36.0157 279.923 96.9262 279.923 172.064Z"
            fill="#477BFF"
          />
          <path
            d="M211.088 255.645H153.862L150.428 209.972L209.038 212.036C209.038 212.036 209.747 206.711 209.782 216.805C209.806 223.807 211.268 237.69 211.088 255.645Z"
            fill="#262626"
          />
          <path
            d="M174.671 207.348C174.618 208.435 174.559 209.529 174.488 210.616C173.576 225.766 171.481 240.822 168.221 255.645H111.026C111.771 232.454 112.391 214.085 112.391 214.085L150.428 209.972L152.709 209.722L174.671 207.348Z"
            fill="#262626"
          />
          <path
            d="M188.465 52.5798C188.465 52.5798 189.114 67.5181 192.341 73.0079C201.639 88.8115 204.03 106.402 194.143 115.333C184.256 124.263 122.548 122.954 118.363 101.786C114.841 83.9645 123.331 82.2544 125.726 67.6763C126.81 61.0802 129.691 47.2622 129.691 47.2622"
            fill="#0A0A0A"
          />
          <path
            d="M135.666 99.4597C135.772 99.4458 136.954 119.063 159.744 117.353C175.522 116.171 181.147 99.4318 181.509 99.4318C179.807 99.0705 176.943 98.5445 176.187 98.1413C173.703 96.8064 170.629 95.4176 169.828 90.5931C169.367 87.812 170.15 73.5863 169.909 70.7728L145.69 76.1782C146.029 82.1206 148.398 95.8952 140.096 98.3349C138.715 98.7367 137.227 99.1064 135.666 99.4597Z"
            fill="#FF9065"
          />
          <path
            opacity="0.52"
            d="M145.351 92.7039C145.731 91.4814 145.975 90.221 146.08 88.9453C146.346 86.0341 146.293 83.1025 145.921 80.2028C150.844 79.5386 155.481 77.5068 159.306 74.3383C159.755 75.9991 162.229 83.2559 161.544 84.8343C160.25 87.818 154.168 92.7039 145.351 92.7039Z"
            fill="#0C0C0C"
          />
          <path
            d="M147.52 86.504C157.045 87.6518 169.484 84.1192 172.339 71.4664L174.914 60.0502C177.769 47.3979 173.437 35.6419 161.525 32.9531C149.612 30.2654 138.393 38.5138 135.539 51.1676L134.399 56.2217C133.304 61.0757 130.528 84.4595 147.52 86.504Z"
            fill="#FF9065"
          />
          <path
            d="M145.243 72.5268C147.071 72.5612 148.866 73.0247 150.483 73.8802C150.548 73.9155 150.597 73.975 150.619 74.0459C150.641 74.1167 150.635 74.1935 150.602 74.2598C150.568 74.3262 150.51 74.3768 150.44 74.4011C150.37 74.4253 150.293 74.4213 150.226 74.3897C146.738 72.6311 143.469 72.6461 140.771 74.4331C140.716 74.4709 140.66 74.5059 140.601 74.5379C140.534 74.5662 140.459 74.5676 140.39 74.5419C140.322 74.5162 140.266 74.4653 140.234 74.3997C140.202 74.3341 140.197 74.2587 140.219 74.1891C140.24 74.1195 140.288 74.0609 140.352 74.0254C140.373 74.0134 140.409 73.9895 140.458 73.9571C141.875 73.0149 143.541 72.5169 145.243 72.5268Z"
            fill="#0C0C0C"
          />
          <path
            d="M144.778 68.6534H144.754C144.264 68.5789 143.779 68.4774 143.301 68.3495C142.586 68.1534 141.646 67.8181 141.739 67.1763C141.844 66.4447 144.99 58.8426 145.348 57.9783C145.363 57.9398 145.385 57.9047 145.414 57.875C145.442 57.8453 145.477 57.8216 145.514 57.8053C145.552 57.7891 145.593 57.7806 145.634 57.7804C145.675 57.7801 145.716 57.7882 145.754 57.804C145.792 57.8198 145.827 57.843 145.856 57.8724C145.885 57.9018 145.907 57.9366 145.923 57.9749C145.938 58.0132 145.945 58.0542 145.944 58.0954C145.943 58.1366 145.934 58.1772 145.918 58.2148C144.576 61.452 142.42 66.7721 142.349 67.2646C142.438 67.4872 143.627 67.867 144.844 68.0431C144.923 68.0549 144.994 68.0966 145.042 68.1594C145.091 68.2222 145.113 68.3013 145.105 68.3803C145.097 68.4592 145.058 68.532 144.998 68.5833C144.937 68.6347 144.859 68.6607 144.78 68.6559L144.778 68.6534Z"
            fill="#0C0C0C"
          />
          <path
            d="M184.368 64.3897L173.689 62.0443C165.663 58.4658 163.692 44.286 163.692 44.286C163.692 44.286 153.467 53.5798 129.693 47.2622C129.693 47.2622 135.664 14.0086 170.73 24.9607C182.036 28.4923 189.829 40.2808 188.272 55.6224C187.178 66.3704 184.368 64.3897 184.368 64.3897Z"
            fill="#0A0A0A"
          />
          <path
            d="M170.729 75.1532C174.349 75.9701 178.158 72.7579 178.975 69.139C179.792 65.52 177.307 62.8597 173.685 62.0433L171.272 64.0479L167.617 74.4546L170.729 75.1532Z"
            fill="#FF9065"
          />
          <path
            d="M143.401 51.22C142.362 50.4965 141.147 50.0656 139.884 49.9724C139.263 49.9229 138.637 49.9672 138.029 50.1036C137.427 50.2362 136.843 50.4441 136.293 50.7224C136.217 50.7584 136.158 50.8224 136.129 50.9009C136.1 50.9795 136.102 51.0663 136.136 51.143C136.17 51.2197 136.232 51.2802 136.31 51.3116C136.388 51.343 136.475 51.3429 136.552 51.3113L136.575 51.3018C137.083 51.0739 137.618 50.9107 138.166 50.8157C138.708 50.7192 139.262 50.7052 139.808 50.7743C140.892 50.9033 141.923 51.3164 142.796 51.972L142.824 51.9944C142.925 52.0733 143.054 52.1086 143.181 52.0928C143.308 52.077 143.424 52.0113 143.503 51.9101C143.582 51.8089 143.617 51.6806 143.601 51.5533C143.585 51.426 143.52 51.3102 143.418 51.2314L143.401 51.22Z"
            fill="#0C0C0C"
          />
          <path
            d="M152.731 53.3827C153.8 53.16 154.909 53.2241 155.945 53.5684C156.469 53.7384 156.964 53.9866 157.414 54.3044C157.87 54.6234 158.284 54.9985 158.647 55.4208L158.663 55.4387C158.72 55.5001 158.798 55.5369 158.882 55.5414C158.965 55.5459 159.047 55.5177 159.11 55.4629C159.174 55.408 159.213 55.3308 159.22 55.2475C159.227 55.1642 159.202 55.0813 159.149 55.0166C158.769 54.5308 158.329 54.0949 157.84 53.7191C157.348 53.3368 156.801 53.0307 156.217 52.8114C155.035 52.3582 153.752 52.2313 152.504 52.4441C152.44 52.4537 152.379 52.476 152.324 52.5097C152.269 52.5434 152.221 52.5879 152.183 52.6404C152.145 52.6929 152.119 52.7524 152.104 52.8155C152.09 52.8785 152.089 52.9438 152.1 53.0074C152.111 53.071 152.135 53.1317 152.171 53.1859C152.206 53.2401 152.252 53.2867 152.305 53.3229C152.359 53.3591 152.419 53.3842 152.482 53.3967C152.546 53.4092 152.611 53.4089 152.674 53.3957L152.694 53.3917L152.731 53.3827Z"
            fill="#0C0C0C"
          />
          <path
            d="M173.668 61.9071L173.785 61.6132C160.336 56.2491 164.132 42.9995 164.172 42.8658L163.869 42.7749C163.83 42.9107 159.946 56.4343 173.668 61.9071Z"
            fill="#0C0C0C"
          />
          <path
            d="M137.612 56.6C138.443 56.6 139.116 55.9266 139.116 55.0959C139.116 54.2652 138.443 53.5918 137.612 53.5918C136.782 53.5918 136.108 54.2652 136.108 55.0959C136.108 55.9266 136.782 56.6 137.612 56.6Z"
            fill="#0C0C0C"
          />
          <path
            d="M152.48 59.159C153.31 59.159 153.984 58.4856 153.984 57.6549C153.984 56.8242 153.31 56.1508 152.48 56.1508C151.649 56.1508 150.976 56.8242 150.976 57.6549C150.976 58.4856 151.649 59.159 152.48 59.159Z"
            fill="#0C0C0C"
          />
          <path
            opacity="0.1"
            d="M157.109 68.3119C157.274 67.1628 156.137 66.0496 154.57 65.8256C153.004 65.6016 151.601 66.3515 151.436 67.5007C151.272 68.6498 152.409 69.763 153.975 69.987C155.542 70.2111 156.945 69.4611 157.109 68.3119Z"
            fill="#0C0C0C"
          />
          <path
            opacity="0.1"
            d="M137.484 64.9941C137.317 66.1418 135.914 66.8904 134.347 66.6688C134.076 66.6297 133.811 66.5628 133.554 66.4692C133.512 65.0954 133.539 63.7744 133.608 62.5548C134.046 62.4561 134.5 62.44 134.944 62.5074C136.511 62.7275 137.647 63.8423 137.484 64.9941Z"
            fill="#0C0C0C"
          />
          <path
            d="M25.7143 98.308C25.924 97.8927 26.2574 97.5528 26.6686 97.3352C27.0799 97.1176 27.5485 97.0331 28.0098 97.0934C28.0058 97.0656 28.0086 97.0373 28.0179 97.0108C28.0273 96.9843 28.043 96.9606 28.0637 96.9415C28.0843 96.9225 28.1093 96.9088 28.1364 96.9016C28.1636 96.8944 28.192 96.894 28.2194 96.9003L26.6629 95.7844C26.1973 95.4657 25.8628 94.9893 25.7212 94.4431C25.5795 93.897 25.6404 93.318 25.8924 92.8132C26.1576 92.3228 26.5953 91.9484 27.1209 91.7624C27.6464 91.5764 28.2223 91.5922 28.7369 91.8067C28.7329 91.7847 28.7479 91.7638 28.7514 91.7413L28.1116 91.2827C27.6741 90.9805 27.3545 90.5365 27.2067 90.0257C27.0589 89.5149 27.0921 88.9688 27.3007 88.4797C27.4378 88.1757 27.6408 87.906 27.8948 87.6899C28.1488 87.4739 28.4476 87.3169 28.7696 87.2303C29.0917 87.1437 29.4289 87.1297 29.757 87.1892C30.0852 87.2487 30.396 87.3803 30.6671 87.5745L32.1427 88.6324C32.1472 88.6234 32.1427 88.6134 32.1487 88.605C32.1547 88.5965 32.1707 88.594 32.1792 88.585C31.8399 88.2041 31.6403 87.7191 31.6131 87.2097C31.5859 86.7003 31.7327 86.1969 32.0294 85.782C32.7281 84.6612 34.3339 84.8902 35.2886 85.5739L43.9746 91.5742L42.4222 88.9603C42.1102 88.4573 42.0007 87.8548 42.1156 87.2743C42.2306 86.6938 42.5614 86.1785 43.0414 85.8324C43.2956 85.6623 43.5818 85.5458 43.8825 85.4899C44.1832 85.4341 44.4921 85.4401 44.7904 85.5076C45.0886 85.5751 45.3701 85.7026 45.6174 85.8824C45.8648 86.0622 46.073 86.2906 46.2292 86.5535L54.7072 100.826C55.7017 102.5 56.0042 104.496 55.5504 106.39C55.0966 108.284 53.9223 109.926 52.2769 110.968C50.3687 112.176 48.1433 112.787 45.8857 112.722C43.6281 112.657 41.4413 111.92 39.6057 110.604L26.4878 101.202C26.0514 100.878 25.7375 100.415 25.5971 99.8898C25.4567 99.3644 25.498 98.807 25.7143 98.308Z"
            fill="#FF9065"
          />
          <g opacity="0.25">
            <path
              opacity="0.25"
              d="M40.7404 94.5653C40.7087 94.6094 40.6609 94.6393 40.6074 94.6486C40.5539 94.6579 40.4988 94.6459 40.454 94.6152L32.2006 88.8954C32.1772 88.8802 32.1571 88.8605 32.1414 88.8374C32.1258 88.8144 32.1149 88.7884 32.1095 88.761C32.1041 88.7337 32.1043 88.7055 32.11 88.6782C32.1157 88.6509 32.1268 88.625 32.1427 88.6021C32.1586 88.5792 32.1789 88.5597 32.2025 88.5448C32.226 88.5299 32.2524 88.5199 32.2799 88.5154C32.3074 88.5108 32.3355 88.5119 32.3626 88.5184C32.3897 88.525 32.4153 88.5369 32.4377 88.5535L40.691 94.2704C40.7362 94.3018 40.7671 94.3499 40.7769 94.404C40.7867 94.4582 40.7747 94.514 40.7434 94.5593L40.7404 94.5653Z"
              fill="#0C0C0C"
            />
          </g>
          <g opacity="0.25">
            <path
              opacity="0.25"
              d="M38.3196 98.2731C38.2879 98.3171 38.2401 98.347 38.1866 98.3563C38.1331 98.3657 38.078 98.3537 38.0332 98.323L28.8227 91.9414C28.7774 91.9101 28.7465 91.862 28.7366 91.8079C28.7266 91.7537 28.7386 91.6979 28.7698 91.6525C28.8024 91.6086 28.8504 91.5788 28.9042 91.5691C28.9579 91.5594 29.0133 91.5704 29.0592 91.6001L38.2702 97.9801C38.3154 98.0116 38.3463 98.0596 38.3561 98.1138C38.3659 98.1679 38.3539 98.2238 38.3226 98.2691L38.3196 98.2731Z"
              fill="#0C0C0C"
            />
          </g>
          <g opacity="0.25">
            <path
              opacity="0.25"
              d="M35.7207 102.306C35.6891 102.35 35.6415 102.38 35.588 102.389C35.5345 102.398 35.4795 102.386 35.4348 102.356L28.0872 97.2655C28.0448 97.233 28.0165 97.1854 28.0082 97.1326C27.9999 97.0799 28.0122 97.0259 28.0427 96.982C28.0731 96.938 28.1192 96.9075 28.1715 96.8966C28.2238 96.8858 28.2783 96.8955 28.3237 96.9237L35.6713 102.014C35.7167 102.045 35.7476 102.093 35.7574 102.148C35.7673 102.202 35.7551 102.258 35.7237 102.303L35.7207 102.306Z"
              fill="#0C0C0C"
            />
          </g>
          <path
            d="M58.4448 95.6761L79.5446 144.403L108.658 104.558L133.888 127.301L90.8036 183.1L90.5212 183.5C88.7967 185.862 86.4992 187.745 83.8453 188.974C81.1913 190.203 78.2683 190.735 75.3516 190.522C72.435 190.308 69.6206 189.356 67.1739 187.754C64.7271 186.152 62.7284 183.954 61.3661 181.366L31.0254 110.928L58.4448 95.6761Z"
            fill="#477BFF"
          />
          <path
            d="M81.9869 149.502C82.041 149.502 82.0943 149.488 82.1416 149.462C82.1888 149.435 82.2285 149.397 82.2568 149.351C82.285 149.305 82.3009 149.252 82.303 149.198C82.305 149.144 82.2931 149.09 82.2683 149.042L79.8276 144.26C79.788 144.188 79.7219 144.134 79.6433 144.109C79.5647 144.085 79.4797 144.093 79.4064 144.13C79.3331 144.167 79.2772 144.232 79.2507 144.31C79.2241 144.388 79.229 144.473 79.2642 144.547L81.7049 149.33C81.7315 149.382 81.7718 149.425 81.8216 149.456C81.8714 149.486 81.9286 149.502 81.9869 149.502Z"
            fill="#0C0C0C"
          />
          <path
            d="M107.35 142.649C108.068 151.082 111.56 203.697 112.25 214.084H209.733C210.27 204.715 210.319 163.748 212.357 145.427C214.303 127.945 218.117 119.192 215.32 114.024C210.749 105.577 204.185 97.9587 191.6 96.9072C186.37 96.4696 176.72 98.3354 176.72 98.3354C176.72 98.3354 176.056 111.732 160.265 112.477C138.768 113.491 140.197 98.3699 140.097 98.3334C135.666 96.7131 120.241 95.8882 113.449 100.374C100.489 108.932 105.826 124.777 107.35 142.649Z"
            fill="#477BFF"
          />
          <path
            d="M108.076 148.123L107.445 148.159L108.205 161.551L108.836 161.515L108.076 148.123Z"
            fill="#0C0C0C"
          />
          <path
            d="M285.551 104.221C285.304 103.827 284.941 103.52 284.512 103.341C284.083 103.162 283.609 103.121 283.156 103.223C283.157 103.195 283.152 103.167 283.14 103.142C283.128 103.116 283.111 103.094 283.088 103.077C283.066 103.06 283.04 103.049 283.012 103.044C282.984 103.039 282.956 103.041 282.929 103.05L284.377 101.796C284.811 101.435 285.1 100.93 285.191 100.373C285.282 99.8164 285.168 99.2455 284.87 98.7661C284.561 98.3024 284.09 97.9699 283.55 97.8332C283.009 97.6965 282.438 97.7652 281.945 98.026C281.945 98.0036 281.93 97.9841 281.925 97.9622L282.519 97.4467C282.927 97.1055 283.204 96.6338 283.305 96.1116C283.405 95.5893 283.321 95.0485 283.068 94.5808C282.904 94.2908 282.677 94.0409 282.404 93.8492C282.131 93.6574 281.819 93.5287 281.49 93.4721C281.162 93.4155 280.825 93.4326 280.504 93.522C280.182 93.6115 279.885 93.7711 279.633 93.9894L278.261 95.1786C278.256 95.1701 278.261 95.1596 278.253 95.1522C278.245 95.1447 278.23 95.1432 278.221 95.1352C278.523 94.7243 278.677 94.223 278.656 93.7133C278.636 93.2036 278.444 92.7159 278.11 92.3302C277.311 91.2782 275.733 91.6545 274.846 92.423L266.749 99.1978L268.054 96.4531C268.319 95.9234 268.373 95.3128 268.205 94.7448C268.038 94.1767 267.66 93.6936 267.15 93.3931C266.881 93.2471 266.585 93.1573 266.281 93.1294C265.976 93.1014 265.669 93.1358 265.378 93.2304C265.087 93.3251 264.819 93.478 264.589 93.6799C264.359 93.8818 264.173 94.1284 264.042 94.4046L256.915 109.397C256.079 111.156 255.961 113.171 256.587 115.015C257.214 116.859 258.534 118.387 260.268 119.273C262.28 120.3 264.552 120.703 266.794 120.431C269.036 120.158 271.146 119.222 272.853 117.743L285.049 107.172C285.453 106.809 285.723 106.32 285.814 105.784C285.905 105.248 285.813 104.697 285.551 104.221Z"
            fill="#FF9065"
          />
          <g opacity="0.25">
            <path
              opacity="0.25"
              d="M270.244 101.875C270.28 101.916 270.33 101.941 270.384 101.945C270.438 101.949 270.492 101.932 270.534 101.897L278.226 95.4446C278.247 95.4271 278.264 95.4056 278.276 95.3814C278.289 95.3572 278.297 95.3308 278.299 95.3036C278.301 95.2764 278.298 95.249 278.29 95.223C278.282 95.197 278.269 95.1728 278.251 95.1519C278.234 95.131 278.212 95.1138 278.188 95.1012C278.164 95.0886 278.137 95.0808 278.11 95.0784C278.083 95.0761 278.056 95.0791 278.03 95.0873C278.004 95.0954 277.98 95.1087 277.959 95.1262L270.267 101.579C270.224 101.614 270.198 101.665 270.193 101.72C270.189 101.774 270.206 101.829 270.241 101.871L270.244 101.875Z"
              fill="#0C0C0C"
            />
          </g>
          <g opacity="0.25">
            <path
              opacity="0.25"
              d="M272.996 105.344C273.032 105.385 273.082 105.41 273.137 105.414C273.191 105.418 273.244 105.401 273.286 105.366L281.869 98.1653C281.911 98.1298 281.937 98.079 281.942 98.0242C281.947 97.9693 281.93 97.9147 281.895 97.8723C281.858 97.8318 281.808 97.8066 281.753 97.8019C281.699 97.7972 281.645 97.8133 281.602 97.8469L273.019 105.048C272.977 105.083 272.95 105.134 272.945 105.189C272.941 105.244 272.958 105.299 272.993 105.341L272.996 105.344Z"
              fill="#0C0C0C"
            />
          </g>
          <g opacity="0.25">
            <path
              opacity="0.25"
              d="M275.956 109.122C275.991 109.163 276.042 109.188 276.096 109.192C276.15 109.196 276.203 109.179 276.245 109.144L283.093 103.398C283.135 103.363 283.161 103.312 283.166 103.257C283.171 103.202 283.154 103.148 283.118 103.105C283.083 103.063 283.032 103.037 282.977 103.032C282.922 103.027 282.868 103.044 282.826 103.08L275.978 108.824C275.936 108.859 275.909 108.91 275.905 108.965C275.9 109.02 275.917 109.074 275.953 109.116L275.956 109.122Z"
              fill="#0C0C0C"
            />
          </g>
          <path
            d="M253.568 103.592L237.528 144.728L214.107 111.843L188.881 134.587L225.007 189.752L225.29 190.152C227.014 192.514 229.312 194.397 231.966 195.626C234.62 196.855 237.543 197.387 240.459 197.174C243.376 196.96 246.19 196.008 248.637 194.406C251.084 192.804 253.083 190.606 254.445 188.018L280.359 118.213L253.568 103.592Z"
            fill="#477BFF"
          />
          <path
            d="M235.087 149.827C235.033 149.827 234.979 149.813 234.932 149.787C234.885 149.76 234.845 149.722 234.817 149.676C234.789 149.63 234.773 149.577 234.771 149.523C234.769 149.469 234.78 149.415 234.805 149.367L237.246 144.585C237.284 144.511 237.351 144.456 237.43 144.431C237.509 144.405 237.595 144.413 237.67 144.45C237.744 144.488 237.8 144.554 237.826 144.633C237.852 144.712 237.846 144.798 237.809 144.873L235.368 149.655C235.342 149.707 235.302 149.75 235.252 149.781C235.202 149.811 235.145 149.827 235.087 149.827Z"
            fill="#0C0C0C"
          />
          <path
            d="M265.414 255.642H25.3909C25.2371 255.637 25.0911 255.573 24.9839 255.463C24.8767 255.352 24.8167 255.204 24.8167 255.051C24.8167 254.897 24.8767 254.749 24.9839 254.639C25.0911 254.528 25.2371 254.464 25.3909 254.46H265.414C265.567 254.464 265.713 254.528 265.821 254.639C265.928 254.749 265.988 254.897 265.988 255.051C265.988 255.204 265.928 255.352 265.821 255.463C265.713 255.573 265.567 255.637 265.414 255.642Z"
            fill="#292A2E"
          />
          <path
            d="M81.2618 65.5081V5.11251C81.2618 3.75694 80.7234 2.45685 79.7651 1.49813C78.8067 0.539401 77.5069 0.000529264 76.1513 0L5.11251 0C3.75659 0 2.4562 0.538638 1.49742 1.49742C0.538638 2.4562 0 3.75659 0 5.11251L0 50.1456C0 51.5015 0.538638 52.8019 1.49742 53.7607C2.4562 54.7194 3.75659 55.2581 5.11251 55.2581H62.8358L78.9353 66.7082C79.1556 66.865 79.4148 66.9581 79.6845 66.9773C79.9542 66.9965 80.224 66.9411 80.4643 66.8171C80.7046 66.6932 80.9061 66.5054 81.0468 66.2745C81.1875 66.0436 81.2619 65.7784 81.2618 65.5081Z"
            fill="#68FE92"
          />
          <path
            d="M38.4444 47.9314C40.1725 47.9314 41.5733 46.5305 41.5733 44.8025C41.5733 43.0745 40.1725 41.6736 38.4444 41.6736C36.7164 41.6736 35.3155 43.0745 35.3155 44.8025C35.3155 46.5305 36.7164 47.9314 38.4444 47.9314Z"
            fill="white"
          />
          <path
            d="M38.2987 38.0118C37.7585 38.0116 37.2405 37.797 36.8586 37.415C36.4767 37.0329 36.2622 36.5149 36.2622 35.9747V28.4095C36.2622 27.9525 36.416 27.5087 36.6987 27.1496C36.9815 26.7906 37.3768 26.5371 37.8211 26.4299C37.9095 26.4079 47.0212 24.1019 47.0212 17.9704C47.0212 14.1229 43.8668 11.4332 39.3507 11.4332C34.4602 11.4332 31.9461 16.3236 31.8418 16.5302C31.5974 17.006 31.1757 17.3667 30.6677 17.5342C30.1597 17.7017 29.6062 17.6627 29.1267 17.4255C28.6472 17.1884 28.2803 16.7721 28.1051 16.2667C27.9299 15.7613 27.9606 15.2072 28.1904 14.7242C28.3402 14.4248 31.9002 7.36012 39.3507 7.36012C46.1554 7.36012 51.0942 11.8209 51.0942 17.9679C51.0942 25.3759 43.6587 28.7693 40.3357 29.9161V35.9747C40.3356 36.5149 40.1209 37.033 39.739 37.415C39.357 37.797 38.8389 38.0116 38.2987 38.0118Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
