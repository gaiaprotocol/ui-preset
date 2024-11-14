import { AppCompConfig } from "@common-module/app-components";
import { MaterialLoadingSpinner } from "@common-module/material-loading-spinner";
import { SocialCompConfig } from "@common-module/social-components";
import { AccordionCloseIcon, AccordionOpenIcon, ErrorIcon, InfoIcon, LogoutIcon, } from "@gaiaprotocol/svg-icons";
class GaiaUIPreset {
    init() {
        AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
        AppCompConfig.InfoIcon = InfoIcon;
        AppCompConfig.ErrorIcon = ErrorIcon;
        AppCompConfig.AccordionOpenIcon = AccordionOpenIcon;
        AppCompConfig.AccordionCloseIcon = AccordionCloseIcon;
        SocialCompConfig.LogoutIcon = LogoutIcon;
    }
}
export default new GaiaUIPreset();
//# sourceMappingURL=GaiaUIPreset.js.map