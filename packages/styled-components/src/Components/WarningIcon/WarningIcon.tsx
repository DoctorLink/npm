import React from 'react';
import colors from '../../Theme/base/colors';

const WarningIcon: React.FC<{ color: string }> = ({
  color, //yellow for wanning, red for danger
}) => {
  const colorFills: Record<string, string> = {
    yellow: colors.warningFill,
    red: colors.red100,
  };
  const colorExclamation: Record<string, string> = {
    yellow: colors.warningExclamation,
    red: colors.white,
  };
  return (
    <svg width="18px" height="17px" viewBox="0 0 18 17">
      <title> {color === 'yellow' ? 'Warning' : 'Danger'} </title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-789.000000, -878.000000)" fillRule="nonzero">
          <g transform="translate(728.000000, 813.000000)">
            <g transform="translate(61.000000, 65.000000)">
              <path
                d="M17.5263919,12.9247183 L11.2017208,1.30718956 C10.7193668,0.510279605 9.88055099,0.0279605263 8.94736842,0.0279605263 C8.01418586,0.0279605263 7.17537007,0.510279605 6.69301604,1.30718956 L0.368344984,12.9247183 C-0.113904194,13.7531188 -0.124424342,14.7387274 0.34744449,15.567023 C0.819243421,16.3953187 1.66850946,16.8881579 2.62269737,16.8881579 L15.2720395,16.8881579 C16.2262274,16.8881579 17.0755284,16.3953187 17.5472924,15.567023 C18.0191612,14.7387274 18.008641,13.7531188 17.5263919,12.9247183 Z"
                id="Path"
                fill={colorExclamation[color]}
              ></path>
              <path
                d="M16.6246649,13.4594984 L10.2999239,1.84186472 C10.0168935,1.35958059 9.50311883,1.07648026 8.94736842,1.07648026 C8.39161801,1.07648026 7.87784334,1.35961554 7.59481291,1.84186472 L1.27007196,13.4594984 C0.976521382,13.9523376 0.976521382,14.5499239 1.25965666,15.0427632 C1.54272204,15.5460177 2.05646176,15.8396382 2.62273232,15.8396382 L15.2720744,15.8396382 C15.83831,15.8396382 16.3520847,15.5460177 16.6351501,15.0427632 C16.9182155,14.5499239 16.9182155,13.9523376 16.6246649,13.4594984 Z"
                id="Path"
                fill={colorFills[color]}
              ></path>
              <path
                d="M8.94736842,11.7993421 C9.5253824,11.7993421 9.99588816,12.2698479 9.99588816,12.8478618 C9.99588816,13.4258758 9.5253824,13.8963816 8.94736842,13.8963816 C8.36935444,13.8963816 7.89884868,13.4258758 7.89884868,12.8478618 C7.89884868,12.2698479 8.36935444,11.7993421 8.94736842,11.7993421 Z M8.94736842,4.30592105 C9.5253824,4.30592105 9.99588816,4.7074193 9.99588816,5.20065789 L9.99588816,9.67434211 C9.99588816,10.1675807 9.5253824,10.5690789 8.94736842,10.5690789 C8.36935444,10.5690789 7.89884868,10.1675807 7.89884868,9.67434211 L7.89884868,5.20065789 C7.89884868,4.7074193 8.36935444,4.30592105 8.94736842,4.30592105 Z"
                id="Combined-Shape"
                fill={colorExclamation[color]}
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export { WarningIcon };
