export interface ChannelInfo {
  name: string;
  avatarUrl: string;
  subscribersCount: string;
  subscribersRaw: number;
  description: string;
  inviteLink: string;
  additionalText: string;
}

export interface DialogState {
  isOpen: boolean;
  type: "redirect" | "success" | "none";
}
