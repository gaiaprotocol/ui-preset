import { AppCompConfig } from "@common-module/app-components";
import { MaterialLoadingSpinner } from "@common-module/material-loading-spinner";
import { SocialCompConfig } from "@common-module/social-components";
import {
  AccordionCloseIcon,
  AccordionOpenIcon,
  ErrorIcon,
  InfoIcon,
  LogoutIcon,
  SuccessIcon,
  WarningIcon,
} from "@gaiaprotocol/svg-icons";

class GaiaUIPreset {
  public init() {
    AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;

    AppCompConfig.SuccessIcon = SuccessIcon;
    AppCompConfig.InfoIcon = InfoIcon;
    AppCompConfig.WarningIcon = WarningIcon;
    AppCompConfig.ErrorIcon = ErrorIcon;

    AppCompConfig.AccordionOpenIcon = AccordionOpenIcon;
    AppCompConfig.AccordionCloseIcon = AccordionCloseIcon;

    SocialCompConfig.LogoutIcon = LogoutIcon;
  }
}

export default new GaiaUIPreset();
