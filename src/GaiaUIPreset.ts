import { AppCompConfig } from "@common-module/app-components";
import { MarkdownEditorConfig } from "@common-module/markdown-editor";
import { MaterialLoadingSpinner } from "@common-module/material-loading-spinner";
import { SocialCompConfig } from "@common-module/social-components";
import {
  AccordionCloseIcon,
  AccordionOpenIcon,
  BoldIcon,
  BulletListIcon,
  CloseIcon,
  CodeBlockIcon,
  CodeIcon,
  ErrorIcon,
  FolderCollapsedIcon,
  FolderExpandedIcon,
  HeadingIcon,
  ImageIcon,
  InfoIcon,
  ItalicIcon,
  LinkIcon,
  LogoutIcon,
  MinusIcon,
  NumberListIcon,
  PlusIcon,
  QuoteIcon,
  SendIcon,
  StrikethroughIcon,
  SuccessIcon,
  TableIcon,
  VideoIcon,
  WarningIcon,
} from "@gaiaprotocol/svg-icons";

class GaiaUIPreset {
  public init() {
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
  }
}

export default new GaiaUIPreset();
