// @flow
import * as React from "react";

import randomID from "../../utils/randomID";
import IllustrationWrapper from "./IllustrationWrapper";
import type { Props } from "..";

const SmartPassV3 = ({ primary, secondary, ...props }: Props): React.Node => {
  const randomIDLinear = React.useMemo(() => randomID("linear1"), []);
  const randomIDLinear2 = React.useMemo(() => randomID("linear2"), []);
  const randomIDLinear3 = React.useMemo(() => randomID("linear3"), []);
  const randomIDLinear4 = React.useMemo(() => randomID("linear4"), []);
  const randomIDLinear5 = React.useMemo(() => randomID("linear5"), []);

  return (
    <IllustrationWrapper {...props} viewBox="0 0 2200 1521">
      <g>
        <g>
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1344.72 1116.89L1471.12 1203.52L1065.24 1436.43L938.5 1349.75L1344.72 1116.89Z"
              fill={`url(#${randomIDLinear})`}
            />
            <path
              d="M1083.75 979.83L1047.4 958.42C1044.22 956.594 1041.58 953.962 1039.74 950.79C1037.9 947.617 1036.93 944.017 1036.93 940.35V799.53C1036.93 795.882 1037.89 792.298 1039.71 789.137C1041.53 785.976 1044.15 783.349 1047.3 781.519C1050.46 779.69 1054.04 778.722 1057.69 778.714C1061.34 778.705 1064.93 779.656 1068.09 781.47L1191.38 853C1194.56 854.825 1197.2 857.456 1199.04 860.626C1200.87 863.797 1201.84 867.395 1201.85 871.06L1194.31 881.46C1194.31 879.41 1190.37 870.13 1183.89 866.08L1060.59 794.53C1059.72 794.029 1058.73 793.768 1057.72 793.771C1056.71 793.775 1055.72 794.043 1054.85 794.55C1053.98 795.057 1053.26 795.784 1052.76 796.659C1052.27 797.533 1052 798.523 1052.01 799.53V940.35C1052.01 941.364 1052.27 942.36 1052.78 943.238C1053.28 944.116 1054.01 944.845 1054.89 945.35L1098.77 971.35L1083.75 979.83Z"
              fill={`url(#${randomIDLinear2})`}
            />
            <path
              d="M481.47 1321.94L1585.43 694.93L1519.64 655.9L1846.64 649L1813.16 830L1738.99 786.01L635.96 1413.07L481.47 1321.94Z"
              fill={`url(#${randomIDLinear3})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M780.43 902L856.89 967L500.89 1165.31L405.89 1107.79L780.43 902Z"
              fill={`url(#${randomIDLinear4})`}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M828.24 962.6L771 999L767.49 948.38L765.64 354.38L770.77 333.44L800.94 350.44V400.3L828.67 416.61L831.82 737.39L828.24 962.6ZM922 470.42V915.53L847 951.59L841.35 727.83L847 427.28L922 470.42Z"
              fill="#CAD5DF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M913.06 308.13L1026.06 373.38L1101.5 329.74V325.25L988.5 260.41L913.05 303.64L913.06 308.13Z"
              fill="#E8EDF1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1488.33 476.83L1450.11 513L1422.27 518.36L1400.93 525.02V537.1L1391.16 536.3L1363.97 560.41L1298.17 590.11L950.38 397.37L709.79 241.43L803.18 187.2L816.64 195.36L834.17 184.75L847.64 177L834.17 169.26L896.58 133.37L1488.33 476.83Z"
              fill="#E8EDF1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1301.95 584.94L1394.93 531.13L1397.07 533.46L1396.07 1230.89V1238.63L1396.37 1249.51L1311.7 1294.46L1308.28 1292.28L1287.81 660.75L1301.95 584.94Z"
              fill="#CAD5DF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1488.33 476.82V1194.98L1426.33 1231.44L1415.76 570.5L1426.04 513.18L1488.33 476.82Z"
              fill="#CAD5DF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1412.88 1223.12L1407.87 525.49L1412.88 505.44L1426.33 513.19V1231.44L1412.88 1223.12Z"
              fill="#B9C7D5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1394.93 1233.32V531.13L1381.88 522.97L1412.88 505.44V1223.12L1404.63 1226.02L1394.93 1233.32Z"
              fill="#A6B5C8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M834.38 169.36L847.84 177.11L834.38 184.86V169.36Z"
              fill="#B9C7D5"
            />
            <path
              d="M1308.87 589.54L1308.26 1293.62L1188.96 1230.81L1187.33 1130.25L1187.32 703.22L912.69 534.16L886.38 519.11L862.84 505.65L836.52 490.6L816.13 478.94L789.81 463.89L773.17 454.37L770.74 995.65L707.54 957.96L709.36 242.17L794.91 288.1L821.2 303.53L841.6 315.49L867.9 330.92L891.43 344.71L917.73 360.14L1308.87 589.54Z"
              fill="#D8E1E8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1488.33 1195.55L1426.33 1231.44V1209.82L1488.33 1173.53V1195.55Z"
              fill="#6D809C"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1394.93 1228L1394.56 1212.6L1412.88 1203.3V1225.18L1396.37 1234.7V1250.2L1308.52 1301.06V1277.02L1394.93 1228Z"
              fill="#6D809C"
            />
            <path
              d="M846.1 495.9L846.3 952.01L827.54 963.02L827.74 485.3L846.1 495.9Z"
              fill="#A6B5C8"
            />
            <path
              d="M770.74 1017.25V995.65L828.24 962.62L847 951.6L922.04 908.38V929.99L770.74 1017.67L770.56 1017.57L770.74 1017.25Z"
              fill="#6D809C"
            />
            <path
              d="M770.56 1017.57L707.54 979.57V957.96L770.74 995.65V1017.25L770.56 1017.57Z"
              fill="#A6B5C8"
            />
            <path
              d="M1426.33 1231.81L1412.88 1224.07V1202.04L1426.33 1209.79V1231.81Z"
              fill="#A6B5C8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1283.65 840.63H1282.68V840.16L1283.65 840.63Z"
              fill="#305F9B"
            />
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1308.29 1128.25L1488.1 1033.64L1488.33 1173.53L1394.93 1228L1308.52 1277.02L1308.29 1128.25Z"
                fill="#6FA1A5"
              />
            </g>
            <path
              d="M1308.78 1193L1308.26 1192.76L1308.78 1193Z"
              fill="#6FA1A5"
              stroke="#6FA1A5"
              strokeWidth="3.53"
              strokeMiterlimit="10"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1308.29 1128.25L1308.52 1301.06L1188.96 1230.81L1186.94 1065.19L1308.29 1128.25Z"
              fill="#6FA1A5"
            />
            <path
              d="M771.47 831.59L770.74 995.65L707.54 957.96L707.95 797.59L770.74 831.95L771.47 831.59Z"
              fill="#6FA1A5"
            />
            <g>
              <path
                d="M922.03 759.49V908.38L770.74 995.65L771.47 831.59L922.03 759.49Z"
                fill="#6FA1A5"
              />
            </g>
            <path
              d="M995.63 930.12C991.972 930.113 988.381 929.14 985.22 927.3L854.34 851.73C851.182 849.902 848.559 847.278 846.732 844.12C844.906 840.961 843.939 837.379 843.93 833.73V693C843.936 689.35 844.902 685.765 846.732 682.605C848.561 679.446 851.188 676.823 854.351 675C857.513 673.176 861.1 672.216 864.75 672.217C868.401 672.217 871.987 673.177 875.15 675L1006 750.48C1009.16 752.31 1011.78 754.935 1013.6 758.093C1015.43 761.251 1016.4 764.832 1016.41 768.48V909.27C1016.4 914.79 1014.2 920.081 1010.31 923.988C1006.41 927.894 1001.12 930.099 995.6 930.12H995.63ZM864.77 687.18C863.755 687.19 862.759 687.462 861.88 687.97C860.997 688.469 860.264 689.197 859.759 690.077C859.254 690.956 858.995 691.956 859.01 692.97V833.71C859.008 834.722 859.272 835.717 859.776 836.594C860.279 837.472 861.005 838.202 861.88 838.71L992.76 914.27C993.635 914.775 994.627 915.04 995.637 915.039C996.647 915.038 997.639 914.77 998.513 914.263C999.386 913.756 1000.11 913.027 1000.61 912.15C1001.11 911.274 1001.38 910.28 1001.37 909.27V768.51C1001.37 767.498 1001.11 766.502 1000.61 765.624C1000.1 764.747 999.376 764.017 998.5 763.51L867.61 688C866.754 687.476 865.773 687.193 864.77 687.18V687.18Z"
              fill={`url(#${randomIDLinear5})`}
            />
            <path d="M873.27 380.65V486.65L776.76 428.6V322.75L873.27 380.65Z" fill={secondary} />
            <path
              d="M1194.31 573.28L1193.49 679.27L873.27 486.65V380.65L1194.31 573.28Z"
              fill={primary}
            />
            <path
              d="M906.02 439.95V463.93L1170.71 622.7L1170.28 598.27L906.02 439.95Z"
              fill={secondary}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M824.64 435.08L833.09 442.5V437.63L825.88 428.55C826.081 426.677 826.164 424.794 826.13 422.91V412.8L847.9 429.89V424.2L838.22 413.46L834 408.79L826 400L825.92 383.08C825.937 380.75 825.62 378.43 824.98 376.19C824.25 373.79 823.16 372.14 821.98 371.54C820.8 370.94 819.78 371.44 819.07 373.07C818.387 374.962 818.085 376.971 818.18 378.98L818.26 396.06L796.85 397.06V402.75L818.3 408.75V418.75C818.292 420.731 818.395 422.711 818.61 424.68L818.77 425.68L811.77 426.32V431.18L819.88 432.68V432.51L820.88 438.37C821.23 440.49 823.32 441.61 823.65 439.84L824.64 435.08Z"
              fill={primary}
            />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id={randomIDLinear}
          x1="1759.24"
          y1="929.9"
          x2="960.36"
          y2="1429.51"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" />
          <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear2}
          x1="194950"
          y1="165505"
          x2="166372"
          y2="178600"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" />
          <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear3}
          x1="2021.35"
          y1="530.91"
          x2="740.13"
          y2="1296.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009882" />
          <stop offset="1" stopColor="#01A891" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear4}
          x1="434133"
          y1="225442"
          x2="283903"
          y2="369238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" />
          <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear5}
          x1="175411"
          y1="195475"
          x2="142874"
          y2="207634"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" />
          <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </IllustrationWrapper>
  );
};

export default SmartPassV3;
