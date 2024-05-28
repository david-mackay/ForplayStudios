import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';  // Import the Header component

const GalleryWrapper = styled.div`
  padding: 30px 0;
  position: relative;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50vh, 1fr));
  grid-gap: 5px;
  margin: auto;
  border-radius: 5px;
  overflow: visible;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  height: 50vh;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 3;
  }

  @media (max-width: 600px) {
    height: 50vw;
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Popup = styled.div`
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(0.95)')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 1000;
  padding: 30px;
  box-sizing: border-box;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const GalleryYesApothecary = () => {
  const [popupImage, setPopupImage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (src) => {
    setPopupImage(src);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const images = [
    "https://uc346d3d00adbef6f5ccb03d0e59.previews.dropboxusercontent.com/p/thumb/ACSupBL0OlKvE-HBO4zp_xb7BoIaqgpKpWQNQF9UAhbIg3l4mvuKYckRJar1TIaCqWi9E1zyGqVijN_u94Ijdg32vfQJejqAPIbHuaUFzXs24IcdwA5uuEJyhfl_Pc2PHCY0sphNJKqAqh1XHD_hv2-SUVoJYLaLKszqTwSaEXEkFFqRzryWFeC1DdhkOvtLftIuOsHE6FLqfTi_uimvM-Sh-e1s6pSoz3K_Ico7orNTQNiOQie1ightTchG64lafkJq1lY6z_5tjhUIfNf2xbpcvs4b6pqtwL7yUEmUtygwWBmXFsP8syMSXdNxGUpI9mTTzvu5HHvKNvzWC3lmEMmeCrSS84RoO-v_EzC8AUnGHQ/p.jpeg",
    "https://ucc6c3026735f6325ee28bce247a.previews.dropboxusercontent.com/p/thumb/ACS_POAxRL2205Ry6y8d8r5Gu2rp4Yzd7bjxtCEl3JiTVbt8oONrQEcNskMkxZjY9kN2C685-BcBXK1_XvLx3pKJG1M6QE_RWwnLfOAZIrObBWi-MHgvagXanjAPpJpDJHM11XRrmE6LczxSYxdVf4sy4Myext5PnU8TX-CyldUbgFoDEj-KWwdov4KADRfwoFgTvxylpwUdCfZs4nK0vltBk9bX3gbKMCoWHJoZyXxcxFzrv7ahgyN54yOSj_gwQGukX9tzR3T0S7DbjFdC9GFNTd5XQ02Y6ng35nL262ZAoDgfWA8qD_C2acdJmBsJ3AYxxLIKkv7mKAnKxc9lhiabuBy0h3LzQv1IBuzQ4ElEvg/p.jpeg",
    "https://uc95c31145a5c13eee7659ae6fb4.previews.dropboxusercontent.com/p/thumb/ACRAqzL-lcrtPj7B6yXMntRZO4PVx2V9ciEYnPWFvjJStjI3BJTyxe60mhdiTZwD-ZN5wZ2lZ94sP6mEGDK-Hv_6COCyUDgezdRu1NYuXJWhcCKbolGFX_GEQj9RfXCO8i3h1WMUIPYBPxytfEJPbzcJUkuqK_JbEEaidxPxTeDBzheJ96IM9OtdXRiFDp7OsJeurMukfl1fommiX2nqlBJSuvJtJGgPl2annFdSga49beL8dsAtvZl5NGAcmnSGhzrDe2jb0BoLhGPRtxxVK0nd3ceBr1Zqoisg0Bn7hPGDxzjQcsqET_SP6rlWkS2e0yq_ivz3WLIhWcNZ5zylijjOE6O0cDMokpBSN-NAFX9cDg/p.jpeg",
    "https://uc5e8fdedc0c229aea833e12b737.previews.dropboxusercontent.com/p/thumb/ACQxf1OrVDbhiSuVYNK-yrP0-m9IIYKXbFwiDqPRd5tKxr6b-hwIhFWVI4OASICS7k-UzSMJm86xNvgbhdgC8Z34MTGglnT-_mhoG0aLosLKeUeapKDNllnY9yfPiMBjDJNajk7H9WDxCFhHUTkq9htEhY1mIDNv5nT28e68etftVL_Xl0E1aYvC_XeCpPZ-tgNz20WWUMzpjZrnbS3huMihzHyq-RCK48iCCMUZSOLAguUUhSbJ2RlsIqTJJd52hwHgZU-opoKTMoOTy9Heh_KL3UnRf0kNmRWA7ENHYir-4CLeYbKIqrS5hArD-rYdJItUTLw5t1sF_ADe8xdQAZ9MZHMlp6oP1tnfk9ZffUWmsA/p.jpeg",
    "https://uc6151645d7b94c5de3d05b9d4d4.previews.dropboxusercontent.com/p/thumb/ACSYjrIFcVozsMQIFCKRwrg6g8CQJxw1wHbMPhbDYrVQTeJ___B0gXaoer08JVTkrNLomXBqdmWU02KVEXnCYP4KKvLaR2fG4ncVZPypQC3n75nVZ7oIAdpW34pTr62nbPADFm90qaegfCeTPpvTb2Hhwd14lZjgU86AeFG5msapBbLPbgE2odpZujnzzRr9ZxggAZUQZQ_OTe2DubhYAlzKkdxdjPLcYopKBdn92cDpA7PnO-dz50b-GfzQiMEgBxpj5vaEbubWhN1oCTVAqE8z2N0UhSjkrOqj-oHqlahuidDGMvSVrMjI7_eMzb0HmVHLEmI1NccqLBAWICI-Mvzd-gmz8GhN9Klu5a6mzYQg6Q/p.jpeg",
    "https://ucaf7ec6d1829432caaed53c1175.previews.dropboxusercontent.com/p/thumb/ACSAwWRbLlkrYGKNUI2rczUTn8z35imaaNq9pgiA2CRVYX2XtmyUquPeIb9OYpjtGk_UZFNNZflzfS400vW-QvXatPNByox7j0AAD8pCCjvtmk8-GLPw9dus6rad4Fup99rNs8NREOuIYTFVWhaQ_oa7UAYu9svwEM80HdC4IFLWyB9TMGmllzndGZns-ThMdU7iElRWOd_mnFzsexq4MF_ghCWu2E2Pg-r6M_1bYGCZokO039OT5kvv5PhGow2YEv8lE-kRU0gKYUPf8bU3lFZrBcSOAmhWmBZshLADxnTscxVHeOL_r4QBrul6ioaHlDCERGV5Uv_HbbhwkEnpNoiGw7CcuZJroS85dcn3fxiogw/p.jpeg",
    "https://ucebd1fa3b48b2a65ab2b52630a4.previews.dropboxusercontent.com/p/thumb/ACQ3cLf2I10k2BfyDVqL2M2gh85c4EYfEJ_-PO0BmfTfLUt3PA0ndjUddN-FYsodYmzPWLv7b0cl-VZNykJAvpZ9VtGeD8hElxyLIBQKoldc9HfO3i-bu7lGnMzPPVxZA6V9k_89zuwrnOS0Kpx2IHtaNivfz0eCKHx2BFUfrQ_lMjS1SvVTFI-sAZepUzn_G8gjcLbOzCTZIDl_9zVFbRzekcs-sNdPnOkra6DZ4_Myco0HwczbZIJ4dzJsnpzfIaTMdBG72s-LDzK6mavKhigb3B9j8T5DPRFxKPnC3fT7iLTBSYVLkrGcQ2MWf5xZ0DWjgxQSoNw44K7d5Y8RCeOt7OhB8euLVCF9_Ck6wta-pQ/p.jpeg",
    "https://uc040834c1dd2cba6c3128081ab5.previews.dropboxusercontent.com/p/thumb/ACT1sDa7pPjsWJGkSq88_y_XYCYvCxl6IwndWT8wXa0AibUbSjzTWzPvhcjIS8a8rhSaO2_ek9JISYUFSz49nyjogW6pn4J-62gJfQlYIJ-swGAbtYdXcMV-dVhmYDv9bXOiqC12uKsQCf1rUX370RWhVb5sEA8m-TPc6JfC5is6TFhLm_uItWTgIa6N5xeC8-Ddr2SZ5LNboR9h9HylrPiXLlGwKYhcSm-osGhFxEyCs2r_F2XDH26YbJ2dORTT5fULEz6QQ0iK3lAVW8an0zpx3Zw_mzeJF6oBJ4H18J9M5-fYWpkB71aJvvZhf-zQrrarEUuD3GlWE3_PYuqwk4nymf_jSvy7LD_tQVVSZjuLNg/p.jpeg",
    "https://uc13678e11cabfd448afb0c6b4c4.previews.dropboxusercontent.com/p/thumb/ACSEbLHa_O1mkUI0mCRi5DVQJOp-sv726-_6rB3kUcMo7KaAW17wFFFpXUDKX9U329xGNNGBei-BTDLEDpX7Yfy_UbpMGBvWdM9GeRfwOZ09JBlHIfWrgtIjFiVwhmpLVGYSFY7CEoxGgnlph0Kk0N3pSiuSQd6oOBJi0mgIHHAXDCpX-DI1VuX_qtdMtFoad2eo6TMx_cNGuK-txcJMnMULoLzdb22Dj2KmvU0r-XeqzUNc1VzYyFMGFt9LFCe6uOHsFiSkdrDK24Es_KVro6dY2Kk7AU6t1Aulx4lzEdNiIzrvudkAa9NHWKQdxXo23dcHCvvTzk-JXw5tuOrhkapZDpQ2U31nctSvFgaoOfDP5A/p.jpeg",
    "https://uc8ddc1b7aba50aa87d2256ab365.previews.dropboxusercontent.com/p/thumb/ACQTAu5wtjQpd7hnoHemLcy9YrsFgN8s7ucXp0wk40TdOcjnEwbMi8GMeYUE0psxvKpKPo6z5BCKTWHBVfO7ARb6adHCwtK0wi_APSI5xNWvnqtGS9UuBIrPpJN56-K9w9eETQ12p5tNBnbqMWq8Lmnk7aWkX3pdpkTPpvd8ggXbG-wKmQ3LBqMshSCEW_xKrug_azMIqodGZjZT9-eJspW6gHv4nU6qpNGKxpPc7u7TiMhSxmWNBvTCBN7NQkyZmGIRU3ItsMvPSwydOtTq1IsiKHs9zhL1CyusjriphGtF8PEcEbNQvOfYVI2Z1IpeZLtf-KBamfr0xkmAxcPr4vmIqxvJbyFelhtqdAGJZeRYKg/p.jpeg",
    "https://uccd344473037570ef04f115138b.previews.dropboxusercontent.com/p/thumb/ACQynXIcKSoYH8k07-7Z8UgDibs92NzU4TRA3TsdcAbaCRXTevXCNMELN-wi-zdifgtFHHB6SYs3EGBBPR_2i-JdnYLzDvV0jAu26hRzaZf8-RVuwuXy7fIDx4Gg2irxhfrBx4DgKvhlA1xayfLY6NRBfbo6gc6TBS9dt0809vGVuaO3g_HvUx7ddBIe2sEYzmFbL7tMG9FMsW1ylH9AxTuF1qu_Mh1388FOONDx4cuc40gBRiPnwUIg7VkBiygZY-UFCP4_No-RNv3yIlLP7Cud7v51ykHabMc81oGPDFZtsxysjrFgV4ilBrgzp65w7WjUSbbSKLjTQxLsoQTVt6UaecEyOHvZ_zFdAl3hRTbf_A/p.jpeg",
    "https://uc3d10ff176e4be708afe2789ab7.previews.dropboxusercontent.com/p/thumb/ACQ9lxuyXnXd3JNmUtg28SJNyRCwcII5u9sf1kRMxMZT8M_oHYthSt0qtfzOF0jWloM2LDd1DPf_j19hdEHY8tPezcbK3xQNcsEaDKTCx_LL2VkHxzc_c3KPqfHMIDLGWUgkSocqtn-fZAOTK5gHLAMX_1XD8RYsBQvSy2rQltszRdJNonJmU6oj5y1KDTAkrEfSLCDNAEvVNWt4yfdFTjqu7ab3PJOvCi1lpwJ_BmnlEDB1Aaswry6JaoXk9CGInmigsER2O1xiawBOLdKslkPHDhoy03XqY9tcpXrThfnJzS9nmxJGwZTeN2eG9uP9nvIW94pWJMICEsCXhNx2aQIfdsQb5KXnZmj4O9C8ju8Yqw/p.jpeg",
    "https://ucdfa9eca6e57a29289a7dbb3c71.previews.dropboxusercontent.com/p/thumb/ACSFIyKRKc65rK5cN-4-Q-fba9yNYyr4G47QHZ0vRyzvojy2TyEDRMQkvB8azuS3ULx0cpNaMp6u0nJgIs7Oqhu63pq9ZBAAN541lD41pxJ4ekLYFdwC61uA5EgF39ylajGOk1iIv8j91DtGxpkE43vB1edrCTWywtpseGRcaB_5RyJrAOOchvAmcRAuKZIWKvAqZCEAIYS1eJxx58KAvgId-iZHXJBC1DReZ7-6Bla70Tc_k5ca-q8wVv1w6P-7xmV4owTMGB_jUvaOb-pWy8nYj5J0K6oPS7Pg4ZEU4PBw_pyXYK-60SilAkmukV8o1AlqoPHxgnXhaOya8yD9HQVEjvwjhbrD3AUiFddknWCcRQ/p.jpeg",
    "https://uc66eb8f7361ecae4886f0bcb6d0.previews.dropboxusercontent.com/p/thumb/ACSAt6bkfKiymdMa5H4B6rH_RMhX1fUjX8rhEUWayjVSD_gRJPGgfwpW3FSC_tB3TyXRBHVheQc5O_T0CVAC2-OhXrgLnP-6G_P-aYtJ3EIRTl3pE_grdGeRY6sUemMOzbrmlpmGwtVKXMy0jDWijHGrgOLtgFs4i1U3pWJF8az_6cHtW-vX2qWANyAC7ClVc7icA-DGIji0ygIsVbj6l9N-T680EgUgV6gtrSfSh4hU2pcmPOOke5_HVZPMr42dZsQSHzLviSQFSnbcoCIy5qIqmZdESmHSySp_tIRsyn3z99N0UbJPdgxSsrdH9ISI9jAzf-jNhIeIflLbJ3XcRkWh-PiDDFcXqQ-SytKHarOJWw/p.jpeg",
    "https://uc9b7ac86161f9f54341a38c39b9.previews.dropboxusercontent.com/p/thumb/ACSy2HsFDwTGRldOjxH0oRdQE869uZQ1F7Gcgz65yXsoO1znCFW5i1sPqAdzZLC8ozHDOEi6uGnPfRRqVOGSuxTioNPUndrqCaMoYX830EYLPg9qmPp7hWzAoX8lPQ8qgzm6JpwiDZFfkwjkL-3m6pdN-dVS6251f0wx0nC3AFnz7dxzI4MKzfQAK0UTIANGqv27yQJpfj0OGrADulPjwfOsM_ehvk-PBDWQUY-QlR_4p4U0KFiQZ8UJDXNzHPMlBP6N2x7LEcvuuBLQj-NyWSgPW1l2Ueki0gYBCHu9lbtqouuijQY_YEJu9sLIPBmmK_nCZicHyRE32nHRHFHboeyP0BuyFaCkWbUXnQR98QZJyQ/p.jpeg",
    "https://uce11fbcd058e192918cf2aa13e5.previews.dropboxusercontent.com/p/thumb/ACSUZXzD9y3HGQB30MjIxiefae0c4mrE26gHTJonBTSBVNC8-SX0k1PwYzVrurnjJSoTWTDWriC83kqrGWh6fD8horQfh6523a3BK4dc2SwMKj3E-gGPE4Qp3mVaL9uZyLMLZUhUFxUU4cv_2avP045SGKuUXmPE0BcHmqLnyMe3T81GgsoX0OB5b4CDJLWnL2N71gBXSlYbmlnbn4EWZtZzD_MHsC1aHwNA02zk8sdvnj11zVohxlwDrldbmr9ihfKJ_cmfXCi46B40s3rpIIOlHH6H7VLNryC4AmPkIKlZxX4ft2uA-ysHA1PDJjC8yPYTUUtsDichZPf_wikE56qIUsOqCcknDtXoabp7_-cZmA/p.jpeg",
    "https://uca45e55be60719eaab7673050fb.previews.dropboxusercontent.com/p/thumb/ACTFtbIoUsIM37LRM4D1QBgcgJanwvggBkQ072GehV4XE24s3HV4rvL86uRLCs3ONz9OVn9YCrUCa83kxCaV8nLKQSllQinzzajn3rVoE9LQRK9TNOoOGauLHSCWfzbalveXgWu_H7FLusgQglVuRSpXhrLrc684gjArOwatGcVYclheVdv14WRhae5zAEkNPbT6D8cUT0KJB_PCZ-4UoGo1f4uKLhVWj9ZJYEjQqmQogh6FwJ36j1Nwf_-jnc0BtK2u0IWsehNR8oqzIwhqnR3om6ACIuGq9MmL-t4EOl0ywBdOQef0Lak-Kw4XNke3cU5j9mWAJ9NHbuIYq_QbNffgmzEsYX7_s1hkfmHHI2zOhQ/p.jpeg",
    "https://uc106197193655801523c314df13.previews.dropboxusercontent.com/p/thumb/ACR1tGwwUe8X9-oHtAld5Xabw9XL0tAb5-ARgZH8sC4cf80iUCdJIG2vtfC8UAf-9B9MMB-Erz4ApOopOUqAus9g1ykWt3eREAa_JEc2KCwPSyhwZ-HiNRUTNVNri1aNKQDXIWxrMFaXPX0FOyuXCJn2HptoB-JRF4Zt15CYoHHwCUgys8mgAzPb8388MGyXp5gHubwCnN1iQJshtvZXEf_cuptqc_GrxtVrqQIrsyg4LBf5OCWuFGEUXkpKcuKjctfvuXJjAA9USRFf5pz7WTqEiKITRVPfPBi9VD51djjx7OmGTYsp40jwQDdij43kwNA_tOCzkAzP-rLWeXaH-JCD_gpFk8B7_C4YXKFO-tNnZQ/p.jpeg",
    "https://uccec00e0bde6ced469154313c7c.previews.dropboxusercontent.com/p/thumb/ACT2rCIVNTXYB1bwRk5T7l4mPw80v528mPeBuq2BWJq-3wDhV6S4N0w6V6BQiruN2f3OX7xvzfb3c3woiYhjqoul4rLNuyozpD_ren8IKFAgwS3_fgt4tUfP04floKr6j9gsUNP-x8W4kreLExoBPjuQI3OwDfh1Sd_NGpLFeK0pwH_--Xl0q3RhWNhfJRIvejY31xHsYiowVybHkQZorWsXcJem79LYZce2d-Mxq6fZi_vsIHIzTRb7CPPfHm920k_EppTSySFo1vg-5BSBQhtmKjuYVkolc1TT3T_m3870uiRI64OYdk_tLBRU1shlmoPB6f3DmUOU4Gjyh3rACRBL16FLs9fsEgPtxo9ngylk2w/p.jpeg",
    "https://uc383f0d87d48897e7325623b9ca.previews.dropboxusercontent.com/p/thumb/ACSJwAGLaYuX8o6itvbEGJRnqrKoidURp_FRWlZijGk5YTukYOtcu4XCDc7b4ycqWeRu2evRETq2ABZZAeBbmF3v62T7tO_GhZpi4a_Gb_x1K-DU5TgUndoa89x-zBRGuXwJD6RQFAFAbnXlimpp92ovKhFc7AJMyFzRUNGwvSm9NOHHas4d177XqiSIooAMcamsLYeLWj27v4r3aAA9yJdNCI1fHtXR5u6GDUHjG-IkqCUlC0lvMc1rpS9dqUj-u_2x6n__cL_TinQCbP5UVBsibzDQLPrSNOZkfJlDCIIfvUYTykPF6NW-GMmntA89-1KA-pjAmqrng45eS4viiUkVPni7E54fDyepdjWF-6jbJQ/p.jpeg",
    "https://uc2aa50795f6f9b7f461a0ff9e09.previews.dropboxusercontent.com/p/thumb/ACRpweZnWJ25tdObWG_r6Y_nkXWmmvazbnLc7jgwpq30ovhL36-LDg9WIsVwmRqTNu_ewDZww-ObNKOEOKj0T5SwKqUYL0SFAftAHBH4LVtaDxT8onp5NooKoMg4_Hf-FmNL4sdHfwqCcOt1axXFQg-MppwAUMUJSzXcPp-fndCaaTPoO-IG-zzHlWmW48JTLioOuGd4jEiBzVkjkaDnhJWcxz-ixGHr4EosPwN_eFZaEQVMkQElpUIo_GlTdkGm8GGNu7Rl2gzswa_xzEgPr8oqpfU7dWvhBbDvMbrHqppXr_Oxhy1QS6zQReBKZF7qHEJVKHn1TS0oDVMqHSZQNWvYFCNdMIJKEqw_mVEtU2-sZQ/p.jpeg",
    "https://uc50a4a9f8dcd65dfd08d9967d40.previews.dropboxusercontent.com/p/thumb/ACQxnkGZjdm9eZQgkJEctFIFUfV6qlvwcn37oxww016voGa0vmF6PG8w1HohS_Ki2C_R5JBm4Q79tjVjyWqGUqB9514kKkoK-rHjECEFdOvynsPn2X__5euHg2EQIKI9h7_dx8rZxnKN38adaxoWAlH0zOwphSEXPDXYTMzPujGDqI8VtacZ1dGTkz2rWHEewzdYh-OB50lxPbSwO-0pU_s2T7wkoajdnSe48qpu1gLFzXey4fAIGvr4MQEzdvKH2cGXpnGHm8gFXZgVLvXn87FPdwszdu_YITqy-6RKQEFrURIFWHkxVLHFmGP-0kZGrKnUPUy1Wv8DyHcjxFkM66vEiqHgA93m12upsA2f4eSmUw/p.jpeg",
    "https://uc0008ba4ce691e597759da823d5.previews.dropboxusercontent.com/p/thumb/ACQwrknL-Uoj74cm95Rdo-LGkj-EIATiTQ94SIcioVkG7ZdQXOdDuBQfKct-_qDkOr6XJSZlFE-Yp4easg-ojMt26DNkrR2i0W6g4b2eQdFgk2elmDuac-GBoMvFWdESV303ULLGr2Oz-rDcJjq5LVsClAytG6WfwZZnlELaLVlqdi_YfSyKjK3Dex3xh0SGMzjLwwEzbW5_Jj4GKjxpNjgofdE_m6VZWHP7TQK1_KCOH3I81lwYZ0nrWhUQIWfHOIEdG26J3-RHiTELeGzpoxWlC_IodklvSCQqJYUjSQsKck7LQbMxMaOru0Bm7zzz-tFxuYcjn2QSs1NQp77HDdRKmiAW-Bi5B_77d7Xfj71a4w/p.jpeg",
    "https://ucb2aacc1bb87bcde4f646de97fa.previews.dropboxusercontent.com/p/thumb/ACQnHCtb6j1Cj-OuCzX3QR39UphA3tlpkySVz-BG32d369tbiiwFh-tv8Rs0aS9bGqDompSXH4D70jFBfBjywxEvy_PwuBR3O3FE_YDIwrvkT3XMKJ5dgN_ZKbajSTFUugV8m2l3sfZLZ0nWcQpMZ3Sj0rGPNisInToXlWjE8pu-W_Be6oZlADKVLoTDfxJITELqSAG38G2WleBQYwAS7ZfwqCRnY6h8eP-g2zWulsNbYpLbx6_ax4Qh8fXcyu5PEcyQGDPvYncODzxiJZd1kDjvn9hNGn1ImZJEylpqKjtX3q96kuRa_kTEx8KjiA__fr4Zh4iVzDgYvTg9wXR-sIYrPcWgzJDwmUKDoncy6apxSA/p.jpeg",
    "https://uc7098dcc874a47bfb7066777a41.previews.dropboxusercontent.com/p/thumb/ACTZO2HzmeM1xhabjvZgv-JC-9_bn-HwEmrMc7mAFQtmK_XF5d4bWhR-bY-kbKOp_TCL8BePBjEDqlhYV418MWX4oTAdNQ0oeZoqfQkdk_SjHAVh2zINwdH8Kjdv4Cr87JeJVgiMr8_vVM8Ce8Jz91-6UaLR7E_QDadp2DjmDv4CnhJnzTnRMBx2zcWlREnvcytaLgdLYEemnpS8IH41ca_B15WRszOhlryhVErNu57M8i55d47FCc-86d1Z-xJWMDW0h_HNrrD7Sp2eLbQhaMEBpRFLxgPC28_4xltx-thAG48yWfNFaxFvnWIuW5cJwD7z33l2lVPsNDkpfh9KGjFTlTrH0NSRdX6tQ0yUKB-42g/p.jpeg",
    "https://uc08e6d36432d9b109925d62ee54.previews.dropboxusercontent.com/p/thumb/ACRAN86xiCRDXnIVErVzpBiIxyUJFriUqxnrCf9XnXbe9dhhOOqL54cnQMrj2fQRY6CoUCEowP-5G_nzJXXAwLtwWweXuJaaanVIW7gLHqQfnZMTssxBWx9yneGM4Uk24Gtmmh3jHaTQrdzBXvJ9Tidyw-TChGpBZvm1nxPzNZHuz9sdYOoMytgRtav-F8gykqqCoA5YgTiosAg5WNYakNSKAqDcamEPa403VR9tY00SMlgo2nqHGZZan7ffdaf6OgDQr0DpxjWlSGFpbyfn9F5zvJ3vRod6pWuxWjlf7joTmWqPZhKQm3jrL8cSo1wGHp0rFAl4dVgS8VGH4TgXgsBz8yQd22Zm71sijVV-SxJCrQ/p.jpeg",
    "https://uc6ca50224ac7181fbbf4e3e97ec.previews.dropboxusercontent.com/p/thumb/ACQoJ2J9lqtKnHn35QbvbEBkyKmT9P1gG1vPal8eY5aJ20ju7gG7cwOTK_mtax-guWjYNUNUvD_5H5pfyzR089CzC0feXp7qQfSRceW0oDZ-sNwkVKHAJ_kgETPIHcfi4CERNKtDSk38kUXvvL40Z1PMLON5ToviVZE4-2WD5sxKF84mUV67ZVw6wFGP0rMaZbfn86m1EeTHFnra9dUfIRxxTzdM_oh4J4bvpV417tmcmnspjFN5dCKkr_dQn5QsXorkGDyyrCVfOaHiVAvwSA3y3flh8xEBe4TyVCLPFmIK7LRwIOy_Ix2ykDFsQNIrXmacVFCK3ReFwCCpvGyKheAyRNVTN-3TpX6P5D84AjrE7w/p.jpeg"
  ];

  return (
    <>
      <Header />  {/* Add Header component */}
      <GalleryWrapper>
        <GalleryGrid>
          {images.map((img, index) => (
            <ImgContainer key={index} onClick={() => openPopup(img)}>
              <ImgWrapper style={{ backgroundImage: `url(${img})` }} />
            </ImgContainer>
          ))}
        </GalleryGrid>
        <Popup isOpen={isPopupOpen} style={{ backgroundImage: `url(${popupImage})` }} onClick={closePopup} />
      </GalleryWrapper>
    </>
  );
};

export default GalleryYesApothecary;
