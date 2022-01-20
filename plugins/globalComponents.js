/* eslint-disable no-console */
import Vue from 'vue'
import SideGitStatus from '@/components/SideGitStatus';
import HeroText from '@/components/HeroText';
import HeroDesc from '@/components/HeroDesc';
import BaseButtonOutline from '@/components/BaseButtonOutline';

Vue
    .component("HeroText", HeroText)
    .component("HeroDesc", HeroDesc)
    .component("SideGitStatus", SideGitStatus)
    .component("BaseButtonOutline", BaseButtonOutline)