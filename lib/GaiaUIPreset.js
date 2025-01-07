import { AppCompConfig } from "@common-module/app-components";
import { MaterialLoadingSpinner } from "@common-module/material-loading-spinner";
import { SocialCompConfig } from "@common-module/social-components";
import { AccordionCloseIcon, AccordionOpenIcon, CloseIcon, ErrorIcon, FolderCollapsedIcon, FolderExpandedIcon, InfoIcon, LogoutIcon, MinusIcon, PlusIcon, SendIcon, SuccessIcon, WarningIcon } from "@gaiaprotocol/svg-icons";
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
        AppCompConfig.FolderCollapsedIcon = FolderCollapsedIcon;
        AppCompConfig.FolderExpandedIcon = FolderExpandedIcon;
        AppCompConfig.MinusIcon = MinusIcon;
        AppCompConfig.PlusIcon = PlusIcon;
        AppCompConfig.updateTabBackgroundOnSelect = (tabBackground, tab) => {
            const leftOffset = tab.htmlElement.offsetLeft;
            const rightInset = tabBackground.calculateRect().width - leftOffset -
                tab.calculateRect().width;
            tabBackground.style({
                clipPath: `inset(0px ${rightInset}px 0px ${leftOffset}px round 9999px)`,
            });
        };
        SocialCompConfig.LogoutIcon = LogoutIcon;
        SocialCompConfig.SendMessageButtonIcon = SendIcon;
    }
}
export default new GaiaUIPreset();
//# sourceMappingURL=GaiaUIPreset.js.map