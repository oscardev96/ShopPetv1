import React from 'react';
import {G, Path} from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
  bell: (
    <G>
      <Path d="M21.4399 20.3621H4.35213C4.01287 20.3619 3.68095 20.264 3.39659 20.0804C3.11223 19.8967 2.88763 19.6352 2.75001 19.3274C2.6124 19.0196 2.56767 18.6788 2.62126 18.3463C2.67484 18.0138 2.82444 17.7038 3.05191 17.454C4.58653 15.7754 5.43544 13.5892 5.43275 11.3225V11.0902C5.43258 10.1057 5.63012 9.13104 6.01383 8.2232C6.39754 7.31536 6.95971 6.49254 7.66749 5.80283C8.37527 5.11313 9.21447 4.57038 10.136 4.20631C11.0576 3.84223 12.043 3.66414 13.0347 3.68243C17.0798 3.757 20.3592 7.18125 20.3592 11.3196C20.3566 13.5863 21.2055 15.7725 22.7401 17.4512C22.9685 17.7009 23.1189 18.0111 23.173 18.3441C23.2271 18.6771 23.1826 19.0185 23.0449 19.3268C22.9071 19.6351 22.6821 19.8971 22.3972 20.0809C22.1123 20.2647 21.7797 20.3624 21.4399 20.3621ZM12.896 4.51699C11.1401 4.51699 9.45611 5.20912 8.21425 6.44122C6.97238 7.67331 6.27433 9.34449 6.27356 11.0873V11.3196C6.27518 13.7932 5.34804 16.1787 3.67313 18.0104C3.55464 18.1404 3.47668 18.3017 3.44869 18.4748C3.42071 18.6479 3.4439 18.8253 3.51546 18.9856C3.58702 19.1458 3.70388 19.2821 3.85187 19.3777C3.99986 19.4734 4.17263 19.5245 4.34924 19.5246H21.4399C21.6165 19.5245 21.7892 19.4734 21.9372 19.3777C22.0852 19.2821 22.2021 19.1458 22.2736 18.9856C22.3452 18.8253 22.3684 18.6479 22.3404 18.4748C22.3124 18.3017 22.2345 18.1404 22.116 18.0104C20.4411 16.1787 19.5139 13.7932 19.5155 11.3196C19.5155 7.63438 16.6002 4.58295 13.0174 4.51699H12.896Z" />
      <Path d="M12.896 23.4908C12.2506 23.4887 11.6209 23.2931 11.0894 22.9298C10.5579 22.5665 10.1492 22.0523 9.91705 21.4546C9.89713 21.4036 9.88762 21.3492 9.88906 21.2945C9.8905 21.2398 9.90287 21.186 9.92545 21.1361C9.94803 21.0862 9.98037 21.0413 10.0206 21.0039C10.0608 20.9665 10.1081 20.9374 10.1598 20.9183C10.264 20.8791 10.3796 20.8824 10.4814 20.9275C10.5832 20.9727 10.6629 21.056 10.703 21.1592C10.8718 21.5985 11.1707 21.9768 11.5603 22.2443C11.9499 22.5118 12.412 22.656 12.8857 22.6578C13.3594 22.6597 13.8226 22.5192 14.2144 22.2547C14.6061 21.9903 14.908 21.6144 15.0804 21.1764C15.121 21.0734 15.2012 20.9905 15.3033 20.9462C15.4055 20.9018 15.5212 20.8995 15.625 20.9398C15.7288 20.9801 15.8123 21.0597 15.857 21.1611C15.9017 21.2625 15.904 21.3774 15.8634 21.4804C15.6308 22.0735 15.2229 22.5829 14.6933 22.9417C14.1637 23.3005 13.5372 23.4919 12.896 23.4908Z" />
      <Path d="M14.7336 4.76929C14.6955 4.77017 14.6575 4.76533 14.6209 4.75496C14.1036 4.60871 13.5695 4.52871 13.0318 4.51692C12.4103 4.50548 11.7905 4.58275 11.1912 4.74635C11.129 4.76211 11.064 4.76385 11.001 4.75144C10.938 4.73904 10.8786 4.7128 10.8272 4.67465C10.776 4.63532 10.7346 4.5849 10.706 4.52725C10.6775 4.46959 10.6626 4.40622 10.6625 4.34198V2.22835C10.6625 1.63735 10.899 1.07056 11.32 0.652668C11.7411 0.234772 12.3121 0 12.9075 0C13.5029 0 14.074 0.234772 14.495 0.652668C14.916 1.07056 15.1526 1.63735 15.1526 2.22835V4.35345C15.1525 4.41769 15.1376 4.48106 15.109 4.53872C15.0805 4.59637 15.039 4.64679 14.9879 4.68613C14.9141 4.73979 14.8251 4.7689 14.7336 4.76929ZM12.9162 3.68237H13.0462C13.4715 3.69134 13.895 3.73838 14.3118 3.82289V2.22835C14.3118 1.85869 14.1638 1.50417 13.9005 1.24279C13.6371 0.9814 13.2799 0.834555 12.9075 0.834555C12.5351 0.834555 12.1779 0.9814 11.9146 1.24279C11.6512 1.50417 11.5033 1.85869 11.5033 2.22835V3.81716C11.9651 3.729 12.4343 3.68387 12.9046 3.68237H12.9162Z" />
      <Path d="M22.8239 12.9314C22.765 12.9317 22.7067 12.919 22.6534 12.8941C22.6006 12.8729 22.5527 12.8413 22.5126 12.8012C22.4724 12.7611 22.4408 12.7134 22.4198 12.6609C22.3987 12.6083 22.3886 12.5521 22.39 12.4956C22.3914 12.4391 22.4044 12.3834 22.428 12.332C22.9569 11.1681 23.2393 9.90872 23.2577 8.632C23.2761 7.35528 23.0301 6.08841 22.535 4.90994C22.5121 4.81446 22.524 4.71402 22.5685 4.62641C22.6131 4.5388 22.6874 4.46965 22.7784 4.4312C22.8694 4.39274 22.9711 4.38747 23.0656 4.4163C23.1601 4.44513 23.2413 4.50621 23.2949 4.58873C23.8385 5.87339 24.1101 7.25534 24.0927 8.64863C24.0753 10.0419 23.7693 11.4168 23.1937 12.6876C23.1613 12.7586 23.1094 12.8191 23.044 12.8622C22.9786 12.9053 22.9024 12.9293 22.8239 12.9314Z" />
      <Path d="M24.4274 14.2619C24.3655 14.2613 24.3045 14.2476 24.2483 14.2218C24.1982 14.1984 24.1533 14.1655 24.1162 14.1248C24.079 14.0841 24.0504 14.0365 24.0318 13.9848C24.0133 13.9331 24.0053 13.8782 24.0082 13.8234C24.0111 13.7686 24.025 13.7149 24.0489 13.6654C24.7884 12.0874 25.1657 10.3662 25.1537 8.62597C25.1418 6.8857 24.7407 5.16977 23.9796 3.602C23.9373 3.5033 23.9348 3.39228 23.9726 3.29181C24.0104 3.19135 24.0856 3.1091 24.1827 3.06203C24.2797 3.01496 24.3913 3.00665 24.4944 3.03881C24.5974 3.07098 24.6841 3.14116 24.7366 3.23491C25.5532 4.91468 25.9846 6.75325 25.9996 8.61831C26.0146 10.4834 25.6128 12.3285 24.8233 14.021C24.7883 14.0952 24.7321 14.1576 24.6618 14.2004C24.5914 14.2432 24.5099 14.2646 24.4274 14.2619Z" />
      <Path d="M3.17614 12.2428C3.09538 12.2425 3.01642 12.2191 2.94875 12.1753C2.88109 12.1316 2.8276 12.0694 2.79474 11.9961C2.21848 10.7254 1.9121 9.35052 1.89471 7.95713C1.87731 6.56373 2.14926 5.18171 2.69361 3.89722C2.71479 3.8467 2.74581 3.80082 2.78488 3.76222C2.82396 3.72362 2.87032 3.69305 2.92132 3.67227C2.97232 3.65149 3.02696 3.6409 3.08209 3.64112C3.13722 3.64133 3.19176 3.65235 3.24259 3.67353C3.34458 3.71771 3.42502 3.79984 3.46662 3.90228C3.50823 4.00471 3.50767 4.11926 3.46508 4.22129C2.96642 5.39999 2.7173 6.66788 2.73321 7.94618C2.74911 9.22448 3.0297 10.4859 3.55754 11.652C3.60266 11.7533 3.60583 11.8681 3.56636 11.9716C3.52689 12.0752 3.44796 12.1592 3.34661 12.2055C3.29273 12.2287 3.23485 12.2413 3.17614 12.2428Z" />
      <Path d="M1.5581 13.5706C1.47836 13.5708 1.4002 13.5485 1.3327 13.5064C1.2652 13.4642 1.21111 13.404 1.1767 13.3326C0.387151 11.6401 -0.0145838 9.79493 0.000404481 7.92987C0.0153928 6.06481 0.446731 4.22624 1.26338 2.54646C1.28578 2.49415 1.31867 2.44691 1.36005 2.40762C1.40144 2.36833 1.45045 2.33782 1.5041 2.31794C1.55775 2.29807 1.61492 2.28924 1.67212 2.292C1.72932 2.29476 1.78535 2.30905 1.83681 2.334C1.88826 2.35895 1.93406 2.39404 1.97141 2.43713C2.00876 2.48022 2.03688 2.5304 2.05405 2.58462C2.07123 2.63885 2.0771 2.69598 2.07132 2.75253C2.06553 2.80908 2.0482 2.86386 2.02039 2.91355C1.25699 4.48026 0.853479 6.19564 0.838989 7.93591C0.824499 9.67618 1.19939 11.3979 1.9366 12.977C1.95991 13.0267 1.97309 13.0804 1.97539 13.1352C1.97769 13.1899 1.96905 13.2446 1.94999 13.2961C1.93092 13.3475 1.9018 13.3947 1.8643 13.4349C1.8268 13.4751 1.78165 13.5076 1.73146 13.5305C1.67753 13.5568 1.61822 13.5706 1.5581 13.5706Z" />
    </G>
  ),
  cart: (
    <G>
      <Path d="M8.66348 15.9107C8.4548 15.91 8.24805 15.9512 8.05505 16.0319C7.86205 16.1126 7.68661 16.2312 7.53875 16.3808C7.39089 16.5305 7.27353 16.7084 7.19338 16.9042C7.11323 17.1001 7.07187 17.31 7.07166 17.5221V21.6309C7.07208 22.0581 7.23925 22.4678 7.53648 22.7699C7.8337 23.072 8.23671 23.2419 8.65705 23.2423H8.68116C9.10151 23.2419 9.50451 23.072 9.80174 22.7699C10.099 22.4678 10.2661 22.0581 10.2666 21.6309V17.5221C10.2657 17.3093 10.2235 17.0986 10.1425 16.9023C10.0614 16.706 9.943 16.5279 9.79407 16.3782C9.64515 16.2285 9.46862 16.1102 9.27461 16.0299C9.0806 15.9497 8.87292 15.9092 8.66348 15.9107ZM9.32272 21.6309C9.32272 21.8043 9.25496 21.9705 9.13434 22.0931C9.01372 22.2157 8.85013 22.2846 8.67956 22.2846H8.66348C8.57947 22.2846 8.49629 22.2677 8.41879 22.2347C8.3413 22.2017 8.27103 22.1534 8.21207 22.0926C8.15312 22.0317 8.10665 21.9596 8.07539 21.8803C8.04413 21.8011 8.02869 21.7163 8.02996 21.6309V17.5221C8.02996 17.3488 8.09773 17.1825 8.21834 17.0599C8.33896 16.9373 8.50255 16.8684 8.67313 16.8684C8.8437 16.8684 9.00729 16.9373 9.12791 17.0599C9.24852 17.1825 9.31629 17.3488 9.31629 17.5221L9.32272 21.6309Z" />
      <Path d="M13.4856 15.9107C13.2771 15.9103 13.0705 15.9516 12.8777 16.0324C12.6849 16.1132 12.5096 16.2318 12.3619 16.3814C12.2142 16.5311 12.097 16.7089 12.017 16.9046C11.9369 17.1003 11.8956 17.3102 11.8954 17.5222V21.6309C11.8958 22.0582 12.063 22.4678 12.3602 22.7699C12.6574 23.072 13.0604 23.2419 13.4808 23.2424H13.5065C13.9268 23.2419 14.3298 23.072 14.6271 22.7699C14.9243 22.4678 15.0915 22.0582 15.0919 21.6309V17.5222C15.0908 17.309 15.0484 17.0982 14.9671 16.9018C14.8857 16.7054 14.767 16.5273 14.6178 16.3775C14.4686 16.2278 14.2918 16.1095 14.0975 16.0294C13.9032 15.9493 13.6953 15.909 13.4856 15.9107ZM14.1448 21.6309C14.1449 21.8026 14.0784 21.9674 13.9599 22.0897C13.8413 22.212 13.6802 22.2821 13.5113 22.2846H13.4856C13.3167 22.2821 13.1556 22.212 13.037 22.0897C12.9185 21.9674 12.8521 21.8026 12.8521 21.6309V17.5222C12.8521 17.3488 12.9198 17.1825 13.0405 17.0599C13.1611 16.9373 13.3247 16.8684 13.4952 16.8684C13.6658 16.8684 13.8294 16.9373 13.95 17.0599C14.0706 17.1825 14.1384 17.3488 14.1384 17.5222L14.1448 21.6309Z" />
      <Path d="M18.3093 15.9107C17.8889 15.9111 17.4859 16.081 17.1887 16.3831C16.8915 16.6853 16.7243 17.0949 16.7239 17.5221V21.6309C16.7243 22.0581 16.8915 22.4678 17.1887 22.7699C17.4859 23.072 17.8889 23.2419 18.3093 23.2423H18.327C18.7473 23.2419 19.1503 23.072 19.4475 22.7699C19.7448 22.4678 19.9119 22.0581 19.9123 21.6309V17.5221C19.9115 17.3093 19.8693 17.0986 19.7883 16.9023C19.7072 16.706 19.5888 16.5279 19.4399 16.3782C19.2909 16.2285 19.1144 16.1102 18.9204 16.0299C18.7264 15.9497 18.5187 15.9092 18.3093 15.9107ZM18.9685 21.6309C18.9685 21.8029 18.9019 21.9679 18.783 22.0903C18.6641 22.2126 18.5026 22.2825 18.3334 22.2846H18.3093C18.1404 22.282 17.9792 22.212 17.8607 22.0897C17.7422 21.9674 17.6757 21.8026 17.6758 21.6309V17.5221C17.6758 17.3488 17.7435 17.1825 17.8641 17.0599C17.9847 16.9373 18.1483 16.8684 18.3189 16.8684C18.4895 16.8684 18.6531 16.9373 18.7737 17.0599C18.8943 17.1825 18.9621 17.3488 18.9621 17.5221L18.9685 21.6309Z" />
      <Path d="M27 11.7169C26.9992 11.004 26.7203 10.3205 26.2245 9.81626C25.7287 9.312 25.0564 9.02811 24.355 9.02681H20.3706V7.17674C20.3706 3.34584 17.5053 0.196457 13.8458 0.00850789C12.915 -0.0381977 11.9847 0.107754 11.1112 0.437511C10.2376 0.767268 9.43906 1.27396 8.76396 1.92684C8.08886 2.57973 7.55127 3.3652 7.18381 4.23562C6.81635 5.10603 6.62667 6.04325 6.62628 6.99042V9.02681H2.64351C1.99071 9.02719 1.3611 9.27293 0.875823 9.71675C0.390548 10.1606 0.0838869 10.7711 0.014842 11.431C-0.0542029 12.0908 0.119246 12.7532 0.501818 13.2909C0.884389 13.8285 1.44906 14.2034 2.08718 14.3433L4.39291 24.1347C4.49181 24.5578 4.72838 24.9345 5.06429 25.2039C5.4002 25.4732 5.81575 25.6194 6.2436 25.6187H20.763C21.1909 25.6197 21.6066 25.4736 21.9425 25.2042C22.2785 24.9349 22.515 24.5579 22.6136 24.1347L24.9194 14.3433C25.5086 14.2119 26.0361 13.8799 26.4144 13.4023C26.7928 12.9247 26.9994 12.3301 27 11.7169ZM7.57816 6.99042C7.57936 6.17481 7.74344 5.36794 8.06046 4.61868C8.37749 3.86943 8.84086 3.19339 9.4225 2.63152C10.0041 2.06965 10.692 1.63365 11.4443 1.34993C12.1966 1.06621 12.9977 0.94068 13.7991 0.980942C16.9506 1.14438 19.4268 3.86719 19.4268 7.18327V10.4062C19.4322 10.5443 19.4101 10.6821 19.3619 10.8114C19.3136 10.9406 19.2402 11.0586 19.1459 11.1583C19.0517 11.2579 18.9387 11.3373 18.8135 11.3914C18.6884 11.4456 18.5538 11.4735 18.4178 11.4735C18.2818 11.4735 18.1472 11.4456 18.0221 11.3914C17.897 11.3373 17.7839 11.2579 17.6897 11.1583C17.5955 11.0586 17.522 10.9406 17.4738 10.8114C17.4255 10.6821 17.4034 10.5443 17.4089 10.4062V6.99042C17.4084 6.46827 17.3067 5.95133 17.1094 5.46922C16.9122 4.9871 16.6233 4.54927 16.2593 4.18082C15.8953 3.81236 15.4634 3.52051 14.9882 3.32198C14.5131 3.12346 14.0041 3.02215 13.4904 3.02387C11.2812 3.02387 9.59608 4.90336 9.59608 7.11136V10.4062C9.6015 10.5443 9.57942 10.6821 9.53116 10.8114C9.4829 10.9406 9.40946 11.0586 9.31523 11.1583C9.22101 11.2579 9.10794 11.3373 8.98282 11.3914C8.85771 11.4456 8.72311 11.4735 8.58712 11.4735C8.45112 11.4735 8.31653 11.4456 8.19141 11.3914C8.06629 11.3373 7.95323 11.2579 7.859 11.1583C7.76478 11.0586 7.69133 10.9406 7.64307 10.8114C7.59481 10.6821 7.57273 10.5443 7.57816 10.4062V6.99042ZM16.4506 9.02681H10.5463V7.11136C10.5463 5.53749 11.6494 4.2055 13.119 4.01428C13.5358 3.95845 13.9596 3.99371 14.3619 4.11772C14.7643 4.24172 15.136 4.4516 15.4521 4.73334C15.7683 5.01507 16.0216 5.36216 16.1952 5.7514C16.3687 6.14064 16.4585 6.56306 16.4586 6.99042L16.4506 9.02681ZM21.6827 23.9091C21.6334 24.1206 21.5152 24.309 21.3474 24.4437C21.1796 24.5784 20.972 24.6515 20.7581 24.6511H6.23878C6.02495 24.6515 5.81729 24.5784 5.64947 24.4437C5.48166 24.309 5.36352 24.1206 5.31423 23.9091L3.07443 14.4054H23.9225L21.6827 23.9091ZM24.3598 13.4379H2.63869C2.19846 13.4241 1.78081 13.2367 1.47421 12.9153C1.16761 12.5939 0.996152 12.1638 0.996152 11.7161C0.996152 11.2684 1.16761 10.8384 1.47421 10.517C1.78081 10.1956 2.19846 10.0081 2.63869 9.99434H6.62628V10.4062C6.62628 10.6678 6.67698 10.9269 6.77548 11.1686C6.87398 11.4103 7.01836 11.6299 7.20036 11.8149C7.38237 11.9999 7.59844 12.1467 7.83624 12.2468C8.07404 12.3469 8.32892 12.3985 8.58631 12.3985C8.84371 12.3985 9.09858 12.3469 9.33638 12.2468C9.57419 12.1467 9.79026 11.9999 9.97227 11.8149C10.1543 11.6299 10.2986 11.4103 10.3971 11.1686C10.4956 10.9269 10.5463 10.6678 10.5463 10.4062V9.99434H16.4506V10.4062C16.4506 10.9346 16.6571 11.4413 17.0246 11.8149C17.3922 12.1886 17.8908 12.3985 18.4106 12.3985C18.9304 12.3985 19.429 12.1886 19.7965 11.8149C20.1641 11.4413 20.3706 10.9346 20.3706 10.4062V9.99434H24.355C24.7952 10.0081 25.2129 10.1956 25.5195 10.517C25.8261 10.8384 25.9975 11.2684 25.9975 11.7161C25.9975 12.1638 25.8261 12.5939 25.5195 12.9153C25.2129 13.2367 24.7952 13.4241 24.355 13.4379H24.3598Z" />
    </G>
  ),
  home: {
    svg: (
      <Path d="M25.1225 11.38L14.1781 0.482615C14.0234 0.329304 13.8398 0.207685 13.6376 0.124708C13.4355 0.0417319 13.2188 -0.000976562 13 -0.000976562C12.7812 -0.000976562 12.5645 0.0417319 12.3624 0.124708C12.1602 0.207685 11.9766 0.329304 11.8219 0.482615L0.869375 11.38C0.312908 11.937 0.000538583 12.6889 0 13.4726L0 22.221C-4.86086e-06 22.6914 0.188061 23.1426 0.523051 23.4759C0.85804 23.8093 1.31268 23.9976 1.7875 23.9997H8.84813C9.32295 23.9976 9.77758 23.8093 10.1126 23.4759C10.4476 23.1426 10.6356 22.6914 10.6356 22.221V16.9494C10.6356 16.3283 10.8847 15.7326 11.3281 15.2933C11.7715 14.8541 12.3729 14.6074 13 14.6074C13.6271 14.6074 14.2285 14.8541 14.6719 15.2933C15.1153 15.7326 15.3644 16.3283 15.3644 16.9494V22.221C15.3633 22.4542 15.4088 22.6854 15.4981 22.9011C15.5875 23.1169 15.7189 23.313 15.885 23.4783C16.0511 23.6435 16.2485 23.7747 16.4659 23.8642C16.6833 23.9537 16.9165 23.9997 17.1519 23.9997H24.2044C24.6806 23.9997 25.1373 23.8123 25.4741 23.4788C25.8108 23.1452 26 22.6928 26 22.221V13.4726C26 13.0837 25.9225 12.6987 25.7719 12.3396C25.6213 11.9805 25.4006 11.6544 25.1225 11.38ZM24.8138 22.221C24.8148 22.3006 24.7998 22.3796 24.7696 22.4533C24.7394 22.527 24.6945 22.594 24.6377 22.6503C24.5809 22.7066 24.5133 22.751 24.4389 22.7809C24.3644 22.8109 24.2847 22.8258 24.2044 22.8247H17.1519C16.9903 22.8247 16.8353 22.7611 16.721 22.6479C16.6067 22.5347 16.5425 22.3811 16.5425 22.221V16.9494C16.5655 16.4739 16.4908 15.9988 16.3229 15.5527C16.1551 15.1067 15.8975 14.699 15.5659 14.3544C15.2344 14.0099 14.8356 13.7356 14.3938 13.5482C13.9521 13.3608 13.4765 13.2641 12.9959 13.2641C12.5154 13.2641 12.0398 13.3608 11.598 13.5482C11.1563 13.7356 10.7575 14.0099 10.4259 14.3544C10.0943 14.699 9.83682 15.1067 9.66896 15.5527C9.50109 15.9988 9.42639 16.4739 9.44938 16.9494V22.221C9.45045 22.2999 9.43569 22.3782 9.40596 22.4514C9.37623 22.5246 9.33211 22.5912 9.27617 22.6474C9.22023 22.7036 9.15359 22.7481 9.08011 22.7786C9.00662 22.809 8.92777 22.8247 8.84813 22.8247H1.7875C1.62588 22.8247 1.47089 22.7611 1.35661 22.6479C1.24233 22.5347 1.17813 22.3811 1.17813 22.221V13.4726C1.17763 13.2378 1.22405 13.0053 1.31469 12.7885C1.40533 12.5716 1.53841 12.3747 1.70625 12.209L12.6587 1.31964C12.7028 1.27386 12.7557 1.23741 12.8144 1.21251C12.873 1.18761 12.9362 1.17477 13 1.17477C13.0638 1.17477 13.127 1.18761 13.1856 1.21251C13.2443 1.23741 13.2972 1.27386 13.3413 1.31964L24.2856 12.209C24.4535 12.3747 24.5865 12.5716 24.6772 12.7885C24.7678 13.0053 24.8142 13.2378 24.8138 13.4726V22.221Z" />
    ),
  },
  user: (
    <G>
      <Path d="M12.0036 13.5605C13.3446 13.5605 14.6555 13.1629 15.7705 12.4179C16.8855 11.6728 17.7546 10.6139 18.2677 9.37497C18.7809 8.13604 18.9152 6.77275 18.6536 5.45751C18.392 4.14226 17.7462 2.93414 16.798 1.9859C15.8497 1.03766 14.6416 0.391902 13.3264 0.130284C12.0111 -0.131334 10.6478 0.00293779 9.4089 0.51612C8.16997 1.0293 7.11103 1.89835 6.36601 3.01336C5.62098 4.12837 5.22333 5.43926 5.22333 6.78027C5.22523 8.57793 5.94018 10.3014 7.21132 11.5725C8.48246 12.8437 10.2059 13.5586 12.0036 13.5605ZM12.0036 1.04754C13.1388 1.04754 14.2486 1.38418 15.1925 2.01489C16.1364 2.6456 16.8721 3.54205 17.3066 4.59088C17.741 5.63971 17.8547 6.79381 17.6332 7.90725C17.4117 9.02068 16.8651 10.0434 16.0623 10.8462C15.2596 11.6489 14.2368 12.1956 13.1234 12.4171C12.01 12.6385 10.8559 12.5249 9.80703 12.0904C8.7582 11.656 7.86174 10.9203 7.23104 9.97637C6.60033 9.03245 6.26369 7.92269 6.26369 6.78745C6.26369 5.26513 6.86843 3.80516 7.94487 2.72872C9.02131 1.65228 10.4813 1.04754 12.0036 1.04754Z" />
      <Path d="M17.6072 14.6008H6.4C5.55988 14.5999 4.72781 14.7646 3.95137 15.0854C3.17493 15.4062 2.46934 15.877 1.87495 16.4707C1.28056 17.0644 0.809028 17.7695 0.48731 18.5456C0.165592 19.3217 -5.29122e-07 20.1535 0 20.9937L0 21.9407C0 22.608 1.04036 22.565 1.04036 21.8977V20.9937C1.04036 20.2902 1.17904 19.5936 1.44848 18.9437C1.71791 18.2938 2.11281 17.7035 2.6106 17.2064C3.10838 16.7092 3.69928 16.3151 4.3495 16.0466C4.99972 15.778 5.6965 15.6403 6.4 15.6412H17.6072C19.0267 15.6412 20.3882 16.2051 21.3919 17.2089C22.3957 18.2127 22.9596 19.5741 22.9596 20.9937V21.8977C22.9596 22.565 23.9928 22.6152 24 21.9407V20.9937C24 19.2982 23.3265 17.6721 22.1276 16.4732C20.9287 15.2744 19.3027 14.6008 17.6072 14.6008Z" />
    </G>
  ),
  chat: (
    <G>
      <Path d="M19.7271 7.60833C19.2503 5.62689 18.1747 3.83838 16.645 2.48366C15.1154 1.12894 13.2051 0.273087 11.1716 0.031354C9.13808 -0.210379 7.07893 0.173624 5.27147 1.13165C3.46402 2.08967 1.99507 3.5757 1.06247 5.3896C0.129862 7.2035 -0.221604 9.25814 0.0554002 11.2768C0.332405 13.2955 1.22458 15.1813 2.61176 16.6801C3.99894 18.179 5.81451 19.2189 7.81394 19.66C9.81338 20.101 11.9006 19.9219 13.7946 19.1468C14.0687 19.026 14.3763 19.0032 14.6653 19.0821L17.4594 19.9354C17.7041 20.0117 17.9646 20.0235 18.2153 19.9696C18.466 19.9157 18.6984 19.7979 18.8896 19.6279C19.0809 19.4578 19.2245 19.2413 19.3063 18.9994C19.3882 18.7576 19.4056 18.4988 19.3567 18.2483L18.7849 15.236C18.7376 14.9591 18.7857 14.6744 18.9213 14.428C19.9961 12.3223 20.2817 9.90456 19.7271 7.60833ZM17.8817 13.8979C17.6267 14.3728 17.5397 14.9193 17.6348 15.4493L18.1936 18.4681C18.2042 18.5212 18.2007 18.5762 18.1834 18.6275C18.166 18.6789 18.1354 18.7248 18.0947 18.7608C18.054 18.7968 18.0045 18.8215 17.9511 18.8325C17.8978 18.8435 17.8425 18.8404 17.7907 18.8236L15.0032 17.9703C14.7923 17.9076 14.5736 17.8749 14.3534 17.8734C14.0162 17.8744 13.6826 17.9425 13.3723 18.0737C11.4493 18.857 9.31089 18.9432 7.33053 18.3173C5.35018 17.6914 3.65384 16.3932 2.53787 14.6495C1.42189 12.9058 0.957249 10.8274 1.22511 8.77754C1.49296 6.72764 2.47629 4.83654 4.0033 3.43461C5.53031 2.03269 7.50391 1.20908 9.5793 1.10768C11.6547 1.00628 13.6999 1.63353 15.3577 2.87985C17.0154 4.12617 18.1803 5.91232 18.6488 7.92624C19.1172 9.94016 18.8595 12.0538 17.9207 13.8979H17.8817Z" />
    </G>
  ),
};
