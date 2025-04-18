import { AppCompConfig } from "@commonmodule/app-components";
import { MarkdownEditorConfig } from "@commonmodule/markdown-editor";
import { MaterialLoadingSpinner } from "@commonmodule/material-loading-spinner";
import { SocialCompConfig } from "@commonmodule/social-components";
import { AccordionCloseIcon, AccordionOpenIcon, BoldIcon, BulletListIcon, CloseIcon, CodeBlockIcon, CodeIcon, ErrorIcon, ExitFullscreenIcon, FolderCollapsedIcon, FolderExpandedIcon, FullscreenIcon, HeadingIcon, ImageIcon, InfoIcon, ItalicIcon, LinkIcon, LogoutIcon, MinusIcon, MoreVertIcon, NextIcon, NumberListIcon, PlusIcon, PrevIcon, QuoteIcon, ResetZoomIcon, SendIcon, ShareIcon, StrikethroughIcon, SuccessIcon, TableIcon, VideoIcon, WarningIcon, ZoomInIcon, ZoomOutIcon, } from "@commonmodule/svg-icons";
class GaiaUIPreset {
    init() {
        AppCompConfig.LoadingSpinner = MaterialLoadingSpinner;
        AppCompConfig.CloseIcon = CloseIcon;
        AppCompConfig.ShareIcon = ShareIcon;
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
        AppCompConfig.PrevIcon = PrevIcon;
        AppCompConfig.NextIcon = NextIcon;
        AppCompConfig.ZoomInIcon = ZoomInIcon;
        AppCompConfig.ZoomOutIcon = ZoomOutIcon;
        AppCompConfig.ResetZoomIcon = ResetZoomIcon;
        AppCompConfig.FullscreenIcon = FullscreenIcon;
        AppCompConfig.ExitFullscreenIcon = ExitFullscreenIcon;
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
        MarkdownEditorConfig.BoldIcon = BoldIcon;
        MarkdownEditorConfig.ItalicIcon = ItalicIcon;
        MarkdownEditorConfig.StrikethroughIcon = StrikethroughIcon;
        MarkdownEditorConfig.HeadingIcon = HeadingIcon;
        MarkdownEditorConfig.LinkIcon = LinkIcon;
        MarkdownEditorConfig.BulletListIcon = BulletListIcon;
        MarkdownEditorConfig.NumberListIcon = NumberListIcon;
        MarkdownEditorConfig.QuoteBlockIcon = QuoteIcon;
        MarkdownEditorConfig.CodeIcon = CodeIcon;
        MarkdownEditorConfig.CodeBlockIcon = CodeBlockIcon;
        MarkdownEditorConfig.TableIcon = TableIcon;
        MarkdownEditorConfig.ImageIcon = ImageIcon;
        MarkdownEditorConfig.YouTubeIcon = VideoIcon;
        MarkdownEditorConfig.MoreIcon = MoreVertIcon;
    }
}
export default new GaiaUIPreset();
//# sourceMappingURL=GaiaUIPreset.js.map