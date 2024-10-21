import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";

export function LogoIcon() {
  const theme = useTheme();
  return (
    <SvgIcon
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <svg
        width={612}
        height={109}
        viewBox="0 0 612 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.2274 89.1485C54.5329 90.2398 50.6502 90.5445 46.8304 90.043C32.7755 88.355 23.0974 78.0975 21.6385 63.8581C20.7863 55.5049 22.4908 47.7143 27.8354 41.0779C34.09 33.2296 42.4536 30.2721 52.2761 30.979C54.3265 31.131 56.3525 31.5183 58.3141 32.1332L69.5955 15.773C60.8419 12.0653 51.005 11.1131 40.1857 12.8155C20.194 15.9173 -0.0432652 34.1818 6.94716e-05 59.8329C6.94716e-05 67.9265 1.24233 75.7026 5.21468 82.9161C14.8928 100.228 29.771 108.885 49.5894 109C51.395 109 53.1861 109 54.9773 109C55.9142 108.94 56.8457 108.814 57.7652 108.625C61.9683 107.968 66.0764 106.805 70 105.162L58.2274 89.1485Z"
          fill="#7B04CA"
        />
        <path
          opacity="0.9"
          d="M76.824 102L65.3444 86.0518C65.3444 86.0518 85.4337 61.5382 85.6202 61.5382C85.7084 61.4611 85.7792 61.3658 85.8277 61.2588C85.8761 61.1519 85.9012 61.0357 85.9012 60.9182C85.9012 60.8006 85.8761 60.6845 85.8277 60.5775C85.7792 60.4705 85.7084 60.3753 85.6202 60.2981C84.4005 58.7552 65.287 35.6981 65 35.3087L76.7235 19C87.3708 32.9439 99.2953 46.8878 110 60.8461C99.3814 74.7467 76.824 102 76.824 102Z"
          fill="#7B04CA"
        />
        <path
          opacity="0.75"
          d="M108.816 102L97.3581 86.0518C97.3581 86.0518 117.409 61.5382 117.581 61.5382C117.669 61.4611 117.739 61.3658 117.788 61.2588C117.836 61.1519 117.861 61.0357 117.861 60.9182C117.861 60.8006 117.836 60.6845 117.788 60.5775C117.739 60.4705 117.669 60.3753 117.581 60.2981C116.363 58.7552 97.2864 35.6981 97 35.3087L108.715 19C119.4 33.016 131.33 46.931 142 60.9182C131.33 74.7467 108.816 102 108.816 102Z"
          fill="#4465F6"
        />
        <path
          opacity="0.5"
          d="M140.83 102L129.372 86.0656C129.372 86.0656 149.423 61.5733 149.595 61.5733C149.683 61.4963 149.754 61.4011 149.802 61.2942C149.851 61.1873 149.876 61.0713 149.876 60.9538C149.876 60.8364 149.851 60.7203 149.802 60.6135C149.754 60.5066 149.683 60.4114 149.595 60.3343C148.363 58.7927 129.286 35.7556 129 35.3666L140.715 19C151.414 33.0038 163.33 46.9068 174 60.8818C163.344 74.7704 140.83 102 140.83 102Z"
          fill="#4BD0F8"
        />
        <path
          d="M549.284 47.8502L537.89 45.325C538.114 44.2951 538.403 43.2802 538.757 42.2863C540.659 37.4115 544.301 33.3926 548.995 30.9872C552.86 29.0132 557.151 27.995 561.501 28.0198C565.087 27.893 568.667 28.3756 572.087 29.4465C579.596 32.0144 583.712 37.3358 584.94 44.9684C585.155 46.3848 585.256 47.816 585.243 49.2483C585.243 60.6615 585.243 72.0746 585.243 83.4878V84.9144H572.838V78.0522L572.592 77.9667C572.38 78.1718 572.182 78.391 572 78.6229C570.435 80.8196 568.368 82.6216 565.967 83.8831C563.566 85.1446 560.899 85.8302 558.18 85.8845C554.601 86.2457 550.987 85.7566 547.638 84.4579C542.641 82.375 538.886 79.0509 537.601 73.6867C536.316 68.3225 536.966 63.2294 540.778 58.8639C542.05 57.4226 543.602 56.2485 545.342 55.4114C549.764 53.2321 554.612 52.0297 559.552 51.8876C561.761 51.802 563.985 51.8876 566.195 51.8876H567.466C572.607 52.0017 573.473 48.4636 572.549 45.054C572.254 43.9479 571.712 42.9212 570.962 42.0497C570.212 41.1781 569.274 40.4838 568.217 40.0179C566.07 38.9771 563.695 38.4792 561.306 38.5688C558.916 38.6585 556.587 39.3329 554.526 40.5315C553.312 41.2106 552.249 42.1257 551.403 43.2218C550.557 44.3179 549.944 45.5721 549.602 46.9086C549.443 47.1796 549.443 47.4365 549.284 47.8502ZM572.722 60.8326C572.597 60.7762 572.467 60.7332 572.332 60.7043C567.913 60.7043 563.48 60.6329 559.046 60.7043C556.535 60.8492 554.129 61.7559 552.158 63.3007C551.521 63.7487 550.982 64.3199 550.575 64.9795C550.168 65.6392 549.901 66.3737 549.79 67.1384C549.417 68.9202 549.748 70.7752 550.714 72.324C551.681 73.8728 553.21 74.9982 554.988 75.47C557.115 76.0962 559.363 76.2135 561.545 75.8124C563.962 75.5716 566.254 74.6307 568.132 73.1078C570.01 71.585 571.391 69.548 572.101 67.2525C572.742 65.1753 572.953 62.9921 572.722 60.8326Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M597.518 29.1183H609.692C610.024 30.1598 610.125 82.9028 609.807 84.8859H597.59C597.316 83.93 597.215 31.3439 597.518 29.1183Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M603.935 15.9999C602.886 16.0018 601.847 15.7989 600.878 15.4029C599.91 15.0069 599.031 14.4258 598.293 13.6933C597.555 12.9608 596.973 12.0916 596.58 11.1361C596.187 10.1806 595.992 9.15794 596.005 8.12753C595.968 7.06888 596.149 6.01382 596.538 5.02577C596.927 4.03771 597.515 3.13704 598.267 2.3779C599.019 1.61875 599.919 1.01679 600.914 0.608185C601.909 0.199583 602.978 -0.00722132 604.056 0.000192501C605.134 0.00760632 606.2 0.229087 607.189 0.651328C608.178 1.07357 609.07 1.68786 609.811 2.45727C610.552 3.22669 611.127 4.13535 611.502 5.12865C611.876 6.12196 612.043 7.1794 611.991 8.23745C611.961 10.3134 611.098 12.2938 609.589 13.7476C608.081 15.2015 606.048 16.011 603.935 15.9999Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M233.697 86.8968C225.576 86.8968 218.763 84.1804 213.258 78.7476C207.753 73.246 205 66.4377 205 58.3228C205 50.4142 207.787 43.6748 213.361 38.1044C218.935 32.534 225.783 29.7488 233.903 29.7488C240.441 29.7488 246.015 31.468 250.626 34.9066C255.236 38.3451 258.161 42.54 259.4 47.4915L248.251 51.2051C247.495 48.5231 245.912 46.1505 243.503 44.0874C241.163 41.9555 237.929 40.8896 233.8 40.8896C229.189 40.8896 225.335 42.5057 222.239 45.7379C219.142 48.9013 217.594 53.0275 217.594 58.1165C217.594 63.2743 219.142 67.5036 222.239 70.8046C225.335 74.1056 229.224 75.7561 233.903 75.7561C240.854 75.7561 245.705 72.2488 248.458 65.2342L259.71 68.8447C258.264 73.6586 255.271 77.8879 250.729 81.5328C246.256 85.1088 240.578 86.8968 233.697 86.8968Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M301.761 43.2621C300.729 43.0558 299.559 42.9527 298.251 42.9527C293.572 42.9527 289.993 44.2593 287.516 46.8726C285.107 49.4858 283.903 53.1994 283.903 58.0134V85.9684H271.619V30.8835H283.593V39.3422C285.245 36.4539 287.413 34.2532 290.097 32.7403C292.849 31.1586 295.74 30.3677 298.767 30.3677C299.8 30.3677 300.798 30.4709 301.761 30.6772V43.2621Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M319.811 62.0364C319.88 66.1626 321.531 69.6011 324.766 72.3519C328 75.034 331.716 76.375 335.914 76.375C343.622 76.375 348.508 73.2803 350.572 67.091L360.792 70.5983C359.278 75.6185 356.181 79.6072 351.501 82.5643C346.89 85.5214 341.764 87 336.121 87C327.931 87 321.05 84.2836 315.476 78.8507C309.97 73.3491 307.217 66.5065 307.217 58.3228C307.217 50.4142 309.867 43.6748 315.166 38.1044C320.465 32.534 327.071 29.7488 334.985 29.7488C343.381 29.7488 349.953 32.3621 354.701 37.5886C359.45 42.8151 361.824 49.6922 361.824 58.2197C361.824 59.8701 361.755 61.1424 361.617 62.0364H319.811ZM334.985 40.2706C331.2 40.2706 327.966 41.4053 325.282 43.6748C322.598 45.9442 320.981 48.9701 320.43 52.7524H349.333C349.127 48.9013 347.647 45.8754 344.895 43.6748C342.211 41.4053 338.908 40.2706 334.985 40.2706Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M370.622 58.3228C370.622 50.8956 373.134 44.2937 378.158 38.517C383.25 32.7403 389.891 29.8519 398.08 29.8519C401.039 29.8519 404.274 30.6084 407.783 32.1214C411.362 33.5655 414.08 35.7662 415.938 38.7233V2H428.222V85.9684H416.248V77.4066C414.321 80.57 411.465 82.9426 407.68 84.5243C403.964 86.0372 400.661 86.7937 397.77 86.7937C389.994 86.7937 383.525 83.9741 378.364 78.3349C373.203 72.627 370.622 65.9563 370.622 58.3228ZM411.499 70.7015C414.596 67.3317 416.145 63.2055 416.145 58.3228C416.145 53.4401 414.596 49.3139 411.499 45.9442C408.403 42.5744 404.446 40.8896 399.628 40.8896C394.742 40.8896 390.751 42.5744 387.654 45.9442C384.626 49.3139 383.112 53.4401 383.112 58.3228C383.112 63.2055 384.626 67.3317 387.654 70.7015C390.751 74.0024 394.742 75.6529 399.628 75.6529C404.515 75.6529 408.471 74.0024 411.499 70.7015Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
        <path
          d="M449.349 78.6444C443.706 73.1428 440.884 66.3689 440.884 58.3228C440.884 50.2767 443.74 43.5028 449.452 38.0012C455.164 32.4996 462.045 29.7488 470.097 29.7488C478.08 29.7488 484.893 32.4652 490.535 37.8981C496.178 43.3309 499 50.0704 499 58.1165C499 66.2314 496.178 73.074 490.535 78.6444C484.961 84.146 478.114 86.8968 469.994 86.8968C461.942 86.8968 455.06 84.146 449.349 78.6444ZM458.019 45.9442C454.992 49.2451 453.478 53.3026 453.478 58.1165C453.478 62.9304 455.026 67.091 458.123 70.5983C461.219 74.0368 465.211 75.7561 470.097 75.7561C474.983 75.7561 478.94 74.0712 481.968 70.7015C484.996 67.3317 486.51 63.2055 486.51 58.3228C486.51 53.4401 484.961 49.3139 481.865 45.9442C478.837 42.5744 474.88 40.8896 469.994 40.8896C465.108 40.8896 461.116 42.5744 458.019 45.9442Z"
          fill="none"
          style={{ fill: theme.palette.text.primary }}
        />
      </svg>
    </SvgIcon>
  );
}
