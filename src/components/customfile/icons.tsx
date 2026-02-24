export function ArrowDownIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "10"} height={props.height || "6"} viewBox="0 0 10 6" fill="none">
      <path d="M8.75 0.75L4.75 4.75L0.75 0.75" stroke={props.stroke || "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function TickIcon({ ...props }) {
  return (
    // <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "14"} height={props.height || "10"} viewBox="0 0 14 10" fill="none">
    //   <path d="M0.75 5.16695L4.46215 8.75L12.75 0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    // </svg>
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "8"} height={props.height || "6"} viewBox="0 0 8 6" fill="none">
      <path d="M1 3.20847L2.85607 5L7 1" stroke="white" stroke-width={props.strokeWidth || "2"} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function VerifyTickIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "14"} height={props.height || "10"} viewBox="0 0 14 10" fill="none">
      <path d="M0.75 5.16695L4.46215 8.75L12.75 0.75" stroke={props.stroke || "white"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export function HomeIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M2.08398 12.7125C2.08398 10.3287 2.08398 9.13685 2.62482 8.14879C3.16565 7.16074 4.15372 6.54751 6.12985 5.32107L8.21318 4.02809C10.3021 2.73165 11.3466 2.08344 12.5007 2.08344C13.6547 2.08344 14.6992 2.73165 16.7881 4.02809L18.8715 5.32106C20.8476 6.54751 21.8357 7.16074 22.3765 8.14879C22.9173 9.13685 22.9173 10.3287 22.9173 12.7125V14.297C22.9173 18.3603 22.9173 20.3921 21.6969 21.6544C20.4766 22.9168 18.5123 22.9168 14.584 22.9168H10.4173C6.48894 22.9168 4.52477 22.9168 3.30437 21.6544C2.08398 20.3921 2.08398 18.3603 2.08398 14.297V12.7125Z" stroke="black" stroke-width="1.5" />
      <path d="M15.625 18.75H9.375" stroke="black" stroke-width="1.5625" stroke-linecap="round" />
    </svg>
  );
}

export function ServicesIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M8.55556 3H5.22222C3.99492 3 3 3.99492 3 5.22222V8.55556C3 9.78286 3.99492 10.7778 5.22222 10.7778H8.55556C9.78286 10.7778 10.7778 9.78286 10.7778 8.55556V5.22222C10.7778 3.99492 9.78286 3 8.55556 3Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20.7782 3H17.4449C16.2175 3 15.2227 3.99492 15.2227 5.22222V8.55556C15.2227 9.78286 16.2175 10.7778 17.4449 10.7778H20.7782C22.0055 10.7778 23.0004 9.78286 23.0004 8.55556V5.22222C23.0004 3.99492 22.0055 3 20.7782 3Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20.7782 15.2222H17.4449C16.2175 15.2222 15.2227 16.2171 15.2227 17.4445V20.7778C15.2227 22.0051 16.2175 23 17.4449 23H20.7782C22.0055 23 23.0004 22.0051 23.0004 20.7778V17.4445C23.0004 16.2171 22.0055 15.2222 20.7782 15.2222Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.55556 15.2222H5.22222C3.99492 15.2222 3 16.2171 3 17.4445V20.7778C3 22.0051 3.99492 23 5.22222 23H8.55556C9.78286 23 10.7778 22.0051 10.7778 20.7778V17.4445C10.7778 16.2171 9.78286 15.2222 8.55556 15.2222Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function AvailabilityIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M19.9698 4.28798H6.02914C5.52939 4.2891 5.05044 4.48812 4.69706 4.84149C4.34369 5.19487 4.14467 5.67383 4.14355 6.17357V20.1142C4.14467 20.614 4.34369 21.093 4.69706 21.4463C5.05044 21.7997 5.52939 21.9987 6.02914 21.9998H19.9698C20.4696 21.9987 20.9485 21.7997 21.3019 21.4463C21.6553 21.093 21.8543 20.614 21.8554 20.1142V6.17357C21.8543 5.67383 21.6553 5.19487 21.3019 4.84149C20.9485 4.48812 20.4696 4.2891 19.9698 4.28798Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M7.93555 10.517H12.4271" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M7.93555 14.3939H17.6601" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M10.2666 1.99985V6.15239" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
      <path d="M15.7324 1.99985V6.15239" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
    </svg>
  )
}

export function DocumentIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 13.0002H12" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 17H16" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function LocationIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M12.7778 23C16.6667 19 20.5556 15.4182 20.5556 11C20.5556 6.58172 17.0733 3 12.7778 3C8.48223 3 5 6.58172 5 11C5 15.4182 8.88889 19 12.7778 23Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.7779 13C14.0052 13 15.0001 12.0051 15.0001 10.7778C15.0001 9.55046 14.0052 8.55554 12.7779 8.55554C11.5506 8.55554 10.5557 9.55046 10.5557 10.7778C10.5557 12.0051 11.5506 13 12.7779 13Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function NotificationIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M9.19382 18.5556H5.44966C4.06204 18.5556 3.36824 18.5556 3.22226 18.447C3.05826 18.325 3.01819 18.253 3.00042 18.0484C2.98462 17.8663 3.40985 17.1651 4.26033 15.7629C5.13843 14.315 5.88405 12.2069 5.88405 9.22222C5.88405 7.57199 6.58108 5.98934 7.8218 4.82244C9.06253 3.65556 10.7453 3 12.5 3C14.2546 3 15.9374 3.65556 17.1781 4.82244C18.4189 5.98934 19.1159 7.57199 19.1159 9.22222C19.1159 12.2069 19.8615 14.315 20.7397 15.7629C21.5901 17.1651 22.0153 17.8663 21.9996 18.0484C21.9818 18.253 21.9417 18.325 21.7777 18.447C21.6317 18.5556 20.9379 18.5556 19.5504 18.5556H15.8079M9.19382 18.5556L9.19202 19.6667C9.19202 21.5077 10.6731 23 12.5 23C14.327 23 15.8079 21.5077 15.8079 19.6667V18.5556M9.19382 18.5556H15.8079" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function LogoutIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M9.29297 7.20833C9.30558 4.94268 9.40605 3.71569 10.2064 2.91529C11.1218 2 12.5949 2 15.5411 2H16.5828C19.5291 2 21.0023 2 21.9175 2.91529C22.8328 3.83058 22.8328 5.30372 22.8328 8.25V16.5833C22.8328 19.5296 22.8328 21.0027 21.9175 21.918C21.0023 22.8333 19.5291 22.8333 16.5828 22.8333H15.5411C12.5949 22.8333 11.1218 22.8333 10.2064 21.918C9.40605 21.1176 9.30558 19.8906 9.29297 17.625" stroke="black" stroke-width="1.5625" stroke-linecap="round" />
      <path d="M15.5417 12.4167H2M2 12.4167L5.64583 9.29175M2 12.4167L5.64583 15.5417" stroke="black" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function MinusIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "18"} height={props.height || "2"} viewBox="0 0 18 2" fill="none">
      <path d="M0.799805 0.799988H16.7998" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function PlusIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "18"} height={props.height || "18"} viewBox="0 0 18 18" fill="none">
      <path d="M0.799805 8.79999H16.7998M8.7998 0.799988V16.8" stroke={props.stroke || "white"} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function SearchIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "18"} height={props.height || "18"} viewBox="0 0 18 18" fill="none">
      <path d="M12.9531 12.9255L16.7998 16.8M15.022 7.9111C15.022 11.8385 11.8383 15.0222 7.91092 15.0222C3.98356 15.0222 0.799805 11.8385 0.799805 7.9111C0.799805 3.98374 3.98356 0.799988 7.91092 0.799988C11.8383 0.799988 15.022 3.98374 15.022 7.9111Z" stroke={props.stroke || "white"} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function CloseIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "15"} height={props.height || "15"} viewBox="0 0 15 15" fill="none">
      <path d="M2.85945 2.85936C3.03526 2.6836 3.27367 2.58487 3.52226 2.58487C3.77085 2.58487 4.00927 2.6836 4.18507 2.85936L7.50007 6.17436L10.8151 2.85936C10.9919 2.68858 11.2287 2.59409 11.4745 2.59622C11.7203 2.59836 11.9555 2.69696 12.1293 2.87078C12.3031 3.0446 12.4017 3.27973 12.4038 3.52554C12.406 3.77135 12.3115 4.00817 12.1407 4.18498L8.8257 7.49998L12.1407 10.815C12.3115 10.9918 12.406 11.2286 12.4038 11.4744C12.4017 11.7202 12.3031 11.9554 12.1293 12.1292C11.9555 12.303 11.7203 12.4016 11.4745 12.4037C11.2287 12.4059 10.9919 12.3114 10.8151 12.1406L7.50007 8.82561L4.18507 12.1406C4.00826 12.3114 3.77144 12.4059 3.52563 12.4037C3.27983 12.4016 3.04469 12.303 2.87087 12.1292C2.69705 11.9554 2.59845 11.7202 2.59632 11.4744C2.59418 11.2286 2.68867 10.9918 2.85945 10.815L6.17445 7.49998L2.85945 4.18498C2.68369 4.00917 2.58496 3.77076 2.58496 3.52217C2.58496 3.27358 2.68369 3.03516 2.85945 2.85936Z" fill={props.fill || "black"} />
    </svg>
  )
}

export function UploadIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "14"} height={props.height || "14"} viewBox="0 0 14 14" fill="none">
      <path d="M7.13259 0.168868C7.03422 0.0612831 6.8952 0 6.7494 0C6.6036 0 6.46459 0.0612831 6.36621 0.168868L3.59697 3.19771C3.40347 3.40935 3.41817 3.73778 3.62981 3.93128C3.84145 4.12478 4.16988 4.11008 4.36338 3.89844L6.23017 1.85663V9.51923C6.23017 9.80598 6.46265 10.0385 6.7494 10.0385C7.03616 10.0385 7.26863 9.80598 7.26863 9.51923V1.85663L9.13544 3.89844C9.32894 4.11008 9.65737 4.12478 9.86901 3.93128C10.0806 3.73778 10.0953 3.40935 9.90182 3.19771L7.13259 0.168868Z" fill={props.fill || "white"} />
      <path d="M1.03846 8.82691C1.03846 8.54016 0.805999 8.30768 0.519231 8.30768C0.23247 8.30768 3.62737e-07 8.54016 3.62737e-07 8.82691V8.86492C-1.34834e-05 9.81172 -2.73792e-05 10.5748 0.080668 11.1751C0.164451 11.7982 0.343683 12.3229 0.760397 12.7396C1.17711 13.1563 1.70179 13.3356 2.32494 13.4193C2.92515 13.5 3.6883 13.5 4.63509 13.5H8.86493C9.81173 13.5 10.5749 13.5 11.1751 13.4193C11.7982 13.3356 12.3229 13.1563 12.7396 12.7396C13.1563 12.3229 13.3356 11.7982 13.4193 11.1751C13.5 10.5748 13.5 9.81172 13.5 8.86492V8.82691C13.5 8.54016 13.2675 8.30768 12.9808 8.30768C12.694 8.30768 12.4615 8.54016 12.4615 8.82691C12.4615 9.82065 12.4604 10.5137 12.3902 11.0367C12.3218 11.5447 12.1969 11.8137 12.0053 12.0053C11.8137 12.1969 11.5447 12.3218 11.0367 12.3901C10.5137 12.4604 9.82066 12.4615 8.82692 12.4615H4.67308C3.67933 12.4615 2.98625 12.4604 2.46331 12.3901C1.95532 12.3218 1.6863 12.1969 1.4947 12.0053C1.3031 11.8137 1.17817 11.5447 1.10987 11.0367C1.03956 10.5137 1.03846 9.82065 1.03846 8.82691Z" fill={props.fill || "white"} />
    </svg>
  )
}

export function HamburgerIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "24"} height={props.height || "24"} viewBox="0 0 24 24" fill="none">
      <path d="M3 12H21M3 6H21M3 18H21" stroke={props.stroke || "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function InfoIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "24"} height={props.height || "24"} viewBox="0 0 24 24" fill="none">
      <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C12.9993 7.71733 12.9033 7.48 12.712 7.288C12.5207 7.096 12.2833 7 12 7C11.7167 7 11.4793 7.096 11.288 7.288C11.0967 7.48 11.0007 7.71733 11 8C10.9993 8.28267 11.0953 8.52033 11.288 8.713C11.4807 8.90567 11.718 9.00133 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#6E2C91" />
    </svg>
  )
}

export function ViewAllIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "16"} height={props.height || "8"} viewBox="0 0 16 8" fill="none">
      <path d="M0.75 3.75H14.75M14.75 3.75L11.75 6.75M14.75 3.75L11.75 0.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function TargetIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4587 2.08329C11.4587 1.80703 11.5684 1.54207 11.7638 1.34672C11.9591 1.15137 12.2241 1.04163 12.5003 1.04163C12.7766 1.04163 13.0415 1.15137 13.2369 1.34672C13.4322 1.54207 13.542 1.80703 13.542 2.08329V4.23121C15.3778 4.46307 17.0844 5.29906 18.3928 6.6075C19.7012 7.91593 20.5372 9.62247 20.7691 11.4583H22.917C23.1933 11.4583 23.4582 11.568 23.6536 11.7634C23.8489 11.9587 23.9587 12.2237 23.9587 12.5C23.9587 12.7762 23.8489 13.0412 23.6536 13.2365C23.4582 13.4319 23.1933 13.5416 22.917 13.5416H20.7691C20.5372 15.3775 19.7012 17.084 18.3928 18.3924C17.0844 19.7009 15.3778 20.5368 13.542 20.7687V22.9166C13.542 23.1929 13.4322 23.4578 13.2369 23.6532C13.0415 23.8485 12.7766 23.9583 12.5003 23.9583C12.2241 23.9583 11.9591 23.8485 11.7638 23.6532C11.5684 23.4578 11.4587 23.1929 11.4587 22.9166V20.7687C9.62283 20.5368 7.9163 19.7009 6.60786 18.3924C5.29942 17.084 4.46344 15.3775 4.23158 13.5416H2.08366C1.80739 13.5416 1.54244 13.4319 1.34709 13.2365C1.15174 13.0412 1.04199 12.7762 1.04199 12.5C1.04199 12.2237 1.15174 11.9587 1.34709 11.7634C1.54244 11.568 1.80739 11.4583 2.08366 11.4583H4.23158C4.46344 9.62247 5.29942 7.91593 6.60786 6.6075C7.9163 5.29906 9.62283 4.46307 11.4587 4.23121V2.08329ZM18.7503 12.5C18.7503 10.8424 18.0918 9.25264 16.9197 8.08054C15.7476 6.90844 14.1579 6.24996 12.5003 6.24996C10.8427 6.24996 9.25301 6.90844 8.08091 8.08054C6.90881 9.25264 6.25033 10.8424 6.25033 12.5C6.25033 14.1576 6.90881 15.7473 8.08091 16.9194C9.25301 18.0915 10.8427 18.75 12.5003 18.75C14.1579 18.75 15.7476 18.0915 16.9197 16.9194C18.0918 15.7473 18.7503 14.1576 18.7503 12.5ZM15.6253 12.5C15.6253 13.3288 15.2961 14.1236 14.71 14.7097C14.124 15.2957 13.3291 15.625 12.5003 15.625C11.6715 15.625 10.8767 15.2957 10.2906 14.7097C9.70457 14.1236 9.37533 13.3288 9.37533 12.5C9.37533 11.6712 9.70457 10.8763 10.2906 10.2902C10.8767 9.7042 11.6715 9.37496 12.5003 9.37496C13.3291 9.37496 14.124 9.7042 14.71 10.2902C15.2961 10.8763 15.6253 11.6712 15.6253 12.5Z" fill="#6E2C91" />
    </svg>
  )
}

export function PhoneIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "20"} height={props.height || "20"} viewBox="0 0 20 20" fill="none">
      <path d="M7.5423 2.22923L8.27242 3.53753C8.93133 4.7182 8.66685 6.26703 7.62904 7.30483C7.62904 7.30483 6.37036 8.5637 8.65256 10.846C10.9341 13.1275 12.1937 11.8695 12.1937 11.8695C13.2315 10.8317 14.7803 10.5672 15.961 11.2261L17.2693 11.9563C19.0522 12.9512 19.2627 15.4514 17.6956 17.0185C16.754 17.9602 15.6004 18.6929 14.3253 18.7412C12.1786 18.8226 8.53308 18.2793 4.87616 14.6224C1.21927 10.9655 0.675989 7.31992 0.757371 5.17327C0.805712 3.89809 1.5384 2.74455 2.48004 1.80292C4.04711 0.235849 6.54731 0.446405 7.5423 2.22923Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}

export function EmailIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "21"} height={props.height || "17"} viewBox="0 0 21 17" fill="none">
      <path d="M1.79199 2.52087L10.1253 8.66671L18.4587 2.52087" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.4167 0.75H2.83333C1.68274 0.75 0.75 1.68274 0.75 2.83333V13.25C0.75 14.4006 1.68274 15.3333 2.83333 15.3333H17.4167C18.5673 15.3333 19.5 14.4006 19.5 13.25V2.83333C19.5 1.68274 18.5673 0.75 17.4167 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function ContactLocationIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "17"} height={props.height || "21"} viewBox="0 0 17 21" fill="none">
      <path d="M8.04167 19.5C11.6875 15.75 15.3333 12.3921 15.3333 8.25C15.3333 4.10786 12.0687 0.75 8.04167 0.75C4.01459 0.75 0.75 4.10786 0.75 8.25C0.75 12.3921 4.39583 15.75 8.04167 19.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.04134 10.125C9.19197 10.125 10.1247 9.19233 10.1247 8.04171C10.1247 6.89111 9.19197 5.95837 8.04134 5.95837C6.89072 5.95837 5.95801 6.89111 5.95801 8.04171C5.95801 9.19233 6.89072 10.125 8.04134 10.125Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function MyBookingIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M12.7559 10.8011L18.069 12.2248" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M11.9014 13.9886L15.0893 14.8427" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M22.1444 13.7133C21.4797 16.1942 21.1472 17.4346 20.3937 18.2391C19.7988 18.8743 19.0288 19.3189 18.1813 19.5165C18.0754 19.5412 17.9679 19.5602 17.8576 19.5738C16.8509 19.698 15.6226 19.3688 13.3865 18.7697C10.9056 18.1049 9.6652 17.7725 8.86071 17.0191C8.22547 16.4241 7.78094 15.6541 7.58331 14.8065C7.33301 13.733 7.66538 12.4926 8.33013 10.0118L8.89959 7.88649C8.9952 7.52971 9.08392 7.19858 9.16801 6.89071C9.66865 5.05786 10.0051 4.0495 10.6502 3.36071C11.2451 2.72547 12.0151 2.28094 12.8628 2.08331C13.9361 1.83301 15.1766 2.16538 17.6575 2.83013C20.1383 3.49488 21.3788 3.82724 22.1833 4.58074C22.8185 5.1757 23.2631 5.94566 23.4607 6.79326C23.6377 7.5524 23.5233 8.39505 23.206 9.70085" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M3.39959 18.1135C4.06434 20.5944 4.39671 21.8348 5.1502 22.6393C5.74516 23.2745 6.51512 23.7191 7.36271 23.9167C8.43619 24.1669 9.67662 23.8346 12.1575 23.1699C14.6383 22.5051 15.8788 22.1728 16.6833 21.4193C17.2256 20.9114 17.6289 20.2759 17.8582 19.5735M9.16862 6.89044C8.78079 6.99072 8.35585 7.10458 7.88649 7.23035C5.40563 7.89509 4.1652 8.22746 3.3607 8.98096C2.72547 9.57591 2.28094 10.3459 2.08331 11.1934C1.90629 11.9526 2.02071 12.7954 2.33804 14.1014" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function WalletIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M19 4H7C4.79086 4 3 5.79086 3 8V18C3 20.2092 4.79086 22 7 22H19C21.2091 22 23 20.2092 23 18V8C23 5.79086 21.2091 4 19 4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3 10.05H6.37006C7.16571 10.05 7.92872 10.3661 8.49133 10.9287C9.05394 11.4913 9.37006 12.2544 9.37006 13.0501C9.37006 13.8457 9.05394 14.6088 8.49133 15.1714C7.92872 15.734 7.16571 16.0501 6.37006 16.0501H3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function StarIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "12"} height={props.height || "11"} viewBox="0 0 12 11" fill="none">
      <path d="M5.77438 9.08554L2.703 10.9402C2.61274 10.9848 2.52898 11.0028 2.4517 10.9944C2.37499 10.9853 2.30025 10.9588 2.22748 10.9148C2.15415 10.8697 2.09887 10.806 2.06164 10.7236C2.02441 10.6413 2.02103 10.5513 2.05149 10.4537L2.86883 6.97619L0.165507 4.63246C0.0893574 4.57041 0.0391548 4.49624 0.0148996 4.40993C-0.00935559 4.32363 -0.00399684 4.24099 0.0309758 4.16202C0.0659484 4.08305 0.112484 4.01818 0.170584 3.96742C0.229248 3.91834 0.308218 3.88506 0.407495 3.86758L3.9747 3.55621L5.36571 0.263141C5.40406 0.170069 5.45934 0.102944 5.53155 0.0617661C5.60375 0.0205887 5.68469 0 5.77438 0C5.86407 0 5.94529 0.0205887 6.01806 0.0617661C6.09083 0.102944 6.14582 0.170069 6.18305 0.263141L7.57406 3.55621L11.1404 3.86758C11.2403 3.8845 11.3195 3.91806 11.3782 3.96826C11.4368 4.0179 11.4837 4.08249 11.5186 4.16202C11.553 4.24099 11.5581 4.32363 11.5339 4.40993C11.5096 4.49624 11.4594 4.57041 11.3833 4.63246L8.67993 6.97619L9.49727 10.4537C9.52886 10.5502 9.52575 10.6398 9.48796 10.7228C9.45017 10.8057 9.39461 10.8694 9.32128 10.914C9.24908 10.9591 9.17434 10.9859 9.09706 10.9944C9.02034 11.0028 8.93686 10.9848 8.84661 10.9402L5.77438 9.08554Z" fill={props.fill || "#FFCB2B"} />
    </svg>
  )
}

export function EditIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "15"} height={props.height || "15"} viewBox="0 0 15 15" fill="none">
      <path d="M8.25 14.25H14.25" stroke={props.stroke || "#878387"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.5488 4.04567L3.82475 13.8085C3.54328 14.0911 3.16084 14.25 2.76199 14.25H1.50287C1.08707 14.25 0.75 13.9099 0.75 13.4941V12.224C0.75 11.8272 0.907215 11.4466 1.18723 11.1655L10.9138 1.40011C13.1724 -0.489593 15.431 2.15596 13.5488 4.04567Z" stroke={props.stroke || "#878387"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.98438 2.48242L12.5476 5.04573" stroke={props.stroke || "#878387"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function DeleteIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "15"} height={props.height || "15"} viewBox="0 0 15 15" fill="none">
      <path d="M13.5001 3.00006H0.75" stroke="#878387" stroke-width="1.5" stroke-linecap="round" />
      <path d="M12.252 4.87506L11.907 10.0494C11.7742 12.0406 11.7079 13.0362 11.0591 13.6431C10.4104 14.2501 9.41257 14.2501 7.41697 14.2501H6.83699C4.84135 14.2501 3.84354 14.2501 3.19479 13.6431C2.54603 13.0362 2.47966 12.0406 2.34691 10.0494L2.00195 4.87506" stroke="#878387" stroke-width="1.5" stroke-linecap="round" />
      <path d="M5.25 6.75012L5.625 10.5001" stroke="#878387" stroke-width="1.5" stroke-linecap="round" />
      <path d="M9 6.75012L8.625 10.5001" stroke="#878387" stroke-width="1.5" stroke-linecap="round" />
      <path d="M3 3.00007C3.04191 3.00007 3.06287 3.00007 3.08186 2.99959C3.69944 2.98393 4.24427 2.59125 4.45442 2.0103C4.46088 1.99243 4.46751 1.97256 4.48076 1.93279L4.55358 1.71435C4.61574 1.52787 4.64682 1.43463 4.68804 1.35546C4.85251 1.03961 5.15681 0.820291 5.50846 0.764139C5.5966 0.750061 5.69491 0.750061 5.89148 0.750061H8.35854C8.55511 0.750061 8.65344 0.750061 8.74156 0.764139C9.09324 0.820291 9.39751 1.03961 9.56199 1.35546C9.60324 1.43463 9.63429 1.52787 9.69647 1.71435L9.76929 1.93279C9.78249 1.9725 9.78916 1.99245 9.79561 2.0103C10.0058 2.59125 10.5506 2.98393 11.1682 2.99959C11.1872 3.00007 11.2081 3.00007 11.25 3.00007" stroke="#878387" stroke-width="1.5" />
    </svg>
  )
}

export function RefreshIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "20"} height={props.height || "20"} viewBox="0 0 20 20" fill="none">
      <path d="M10 19C5.02944 19 1 14.9706 1 10C1 7.69494 1.86656 5.59227 3.29168 4L6 1M6 1H1M6 1V6M10 1C14.9706 1 19 5.02944 19 10C19 12.3051 18.1334 14.4077 16.7083 16L14 19M14 19H19M14 19V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function EmailIcon1({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "21"} height={props.height || "17"} viewBox="0 0 21 17" fill="none">
      <path d="M1.79297 2.5209L10.1263 8.66674L18.4596 2.5209" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.4167 0.75H2.83333C1.68274 0.75 0.75 1.68274 0.75 2.83333V13.25C0.75 14.4006 1.68274 15.3333 2.83333 15.3333H17.4167C18.5673 15.3333 19.5 14.4006 19.5 13.25V2.83333C19.5 1.68274 18.5673 0.75 17.4167 0.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function BookingIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "25"} height={props.height || "25"} viewBox="0 0 25 25" fill="none">
      <path d="M12.7559 10.801L18.069 12.2247" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M11.9004 13.9885L15.0883 14.8427" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M22.1444 13.7133C21.4797 16.1942 21.1472 17.4346 20.3937 18.2391C19.7988 18.8743 19.0288 19.3189 18.1813 19.5165C18.0754 19.5412 17.9679 19.5602 17.8576 19.5738C16.8509 19.698 15.6226 19.3688 13.3865 18.7697C10.9056 18.1049 9.6652 17.7725 8.86071 17.0191C8.22547 16.4241 7.78094 15.6541 7.58331 14.8065C7.33301 13.733 7.66538 12.4926 8.33013 10.0118L8.89959 7.88649C8.9952 7.52971 9.08392 7.19858 9.16801 6.89071C9.66865 5.05786 10.0051 4.0495 10.6502 3.36071C11.2451 2.72547 12.0151 2.28094 12.8628 2.08331C13.9361 1.83301 15.1766 2.16538 17.6575 2.83013C20.1383 3.49488 21.3788 3.82724 22.1833 4.58074C22.8185 5.1757 23.2631 5.94566 23.4607 6.79326C23.6377 7.5524 23.5233 8.39505 23.206 9.70085" stroke="black" stroke-width="1.5" stroke-linecap="round" />
      <path d="M3.39959 18.1135C4.06434 20.5944 4.39671 21.8347 5.1502 22.6393C5.74516 23.2745 6.51512 23.719 7.36271 23.9166C8.43619 24.1669 9.67662 23.8345 12.1575 23.1698C14.6383 22.505 15.8788 22.1727 16.6833 21.4192C17.2256 20.9113 17.6289 20.2759 17.8582 19.5734M9.16862 6.89038C8.78079 6.99066 8.35585 7.10452 7.88649 7.23029C5.40563 7.89503 4.1652 8.2274 3.3607 8.9809C2.72547 9.57585 2.28094 10.3458 2.08331 11.1934C1.90629 11.9526 2.02071 12.7954 2.33804 14.1013" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export function DateArrowIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width || "24"} height={props.height || "24"} viewBox="0 0 24 24" fill="none">
      <path d="M7 10L12 15L17 10H7Z" fill={props.fill || "#878387"} />
    </svg>
  )
}

export function DownloadIcon({ ...props }) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path d="M0.75 8.49194V14.1371C0.75 14.5649 0.91993 14.9751 1.22241 15.2776C1.52489 15.5801 1.93513 15.75 2.3629 15.75H13.6532C14.081 15.75 14.4912 15.5801 14.7937 15.2776C15.0962 14.9751 15.2661 14.5649 15.2661 14.1371V8.49194" stroke="#6E2C91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4.70312 8.49194L8.00958 11.7177L11.316 8.49194" stroke="#6E2C91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.00781 0.75V10.0242" stroke="#6E2C91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}