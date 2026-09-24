export interface AvatarCustomization {
  headColor: string;
  torsoColor: string;
  leftArmColor: string;
  rightArmColor: string;
  leftLegColor: string;
  rightLegColor: string;
  equippedHat: string;
  equippedShirt: string;
  equippedPants: string;
  equippedFace: string;
  equippedGear: string;
}

export interface MarketplaceItem {
  id: string;
  name: string;
  type: 'hat' | 'shirt' | 'pants' | 'gear' | 'face';
  price: number;
  description: string;
  icon: string;
  image?: string;
  isOwned?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  thumbnail: string;
  category: string;
  url?: string;
}

export interface PlayerData {
  username: string;
  coins: number;
  avatar: AvatarCustomization;
  inventory: string[];
}
