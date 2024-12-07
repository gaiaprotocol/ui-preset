import { AppCompConfig } from "@common-module/app-components";
import { MaterialLoadingSpinner } from "@common-module/material-loading-spinner";
import { SocialCompConfig } from "@common-module/social-components";
import { AccordionCloseIcon, AccordionOpenIcon, CloseIcon, ErrorIcon, InfoIcon, LogoutIcon, SendIcon, SuccessIcon, WarningIcon, } from "@gaiaprotocol/svg-icons";
class GaiaUIPreset {
    init() {
        AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
        AppCompConfig.CloseIcon = CloseIcon;
        AppCompConfig.SuccessIcon = SuccessIcon;
        AppCompConfig.InfoIcon = InfoIcon;
        AppCompConfig.WarningIcon = WarningIcon;
        AppCompConfig.ErrorIcon = ErrorIcon;
        AppCompConfig.AccordionOpenIcon = AccordionOpenIcon;
        AppCompConfig.AccordionCloseIcon = AccordionCloseIcon;
        SocialCompConfig.LogoutIcon = LogoutIcon;
        SocialCompConfig.SendMessageButtonIcon = SendIcon;
    }
}
export default new GaiaUIPreset();
//# sourceMappingURL=GaiaUIPreset.js.map