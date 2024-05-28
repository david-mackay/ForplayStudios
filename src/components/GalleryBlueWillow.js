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

const GalleryBlueWillow = () => {
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
    "https://uc7d8fa0fa240020f6a2d3f8a103.previews.dropboxusercontent.com/p/thumb/ACRMgLr8qTcuWHziPqE3QNsYC5Iqnn4gyZro5l_XgfuBLq4nRePmlYI-RjcknhLEgkMwk98EHdQOJ72h282g-Sd1ikvqWpxlZes06q0IYwQE2f0QbbDgXFXCucualT_L3V5wXiULB-qzJUQd6n0lyhph8vPSuTUIyUIjMvK_7-8hWgPWWu92XhbKJCeL9RayOFDRPL9juROSceFrrpH32IJNIZWrMmgd2RRh75G9_BXMW0iUFQhGDOIyoByjfi73k4ADk8dNb1njyVkyvHEVRkUCsPYCvdxJbuC3DCL0HEwpma_bfv5LkUCW66-pE2BfTivdo2mQ9Jhlf7tWVLMaDaNR76reob5Q0D7cSSWz8rDNdw/p.jpeg",
    "https://ucd55c56a7df8ccf9ead47cc2c57.previews.dropboxusercontent.com/p/thumb/ACR3an91U39mb95wucB_QthAfluuOQcPFW1W5iidw1qxNDDuQTQsF5zt7vPuIBQ4g2LUi0O-R6VMDLJY-DiFriDPTX7Gag1k3hBckeuOYmjrpBHbgVVM1ffSn_ZTjeiR1eyaKisoce8Bw3jxzPw5a4wpcr2VUdgiYi-vXQAygY8ITfHPl2XOym5ChsOGq6gdVIP4hTIlQXYszwpQd2ty2wYboPLn1lKIJreo9MORNxPssQ4GdhfZWqAeIkSzAzkqZ18d-fncCr3yJuyuAHYdj63x53flaDuWGfjK5Z8E8Ymr25Fts4m00ow0OPIX1MQD15rJJI2nek4Z2vM_WgNY5xq6hodWs1TyAi8-xN3Mv8XVfg/p.jpeg",
    "https://ucea55be3cd0c2e57ff2e5faab29.previews.dropboxusercontent.com/p/thumb/ACSTuFkKBs6ZfnlHkeTqfjLMgea6EPB8Blr9OFXBK6dJd8DBDtrpf-pGO72yYoAEDIEAtWwfeJ5SxKfz-FwI6bVm_IZg_kPLuC8dczKvU0jWHPOhpN1WwzIfk0-Bd7iebyYiZfrnPdVbH_sFu4kAYDf4IyG-0s3KVILV5-KhBGjh-dYt81IEYIu6JERrBsnNsYJyxtcnspQb6377MRXkvqp7GXhmY86ar7jZHIxuVKo4O2kOxyINYnnrTL_5CrsTvZ-QRrwvLW8uYPlD0jx_kF7xF4vDWniTbNVtPQj2O8CEBbqZ5nFWLn94Ow8Q5d1_LPyBidb2AwVtxo60B6XELxXW9uYGV3B2QSx1hjH-aZ6I8Q/p.jpeg",
    "https://uc27456cba664b09d119866f956d.previews.dropboxusercontent.com/p/thumb/ACQDwxGXLWkMFDVBy4j0jlIpFMCuR1TkKALGmOQ30ibtIrZhnqDAkn5L3mznnyIovZCon39JjN66k3y57HnIUuAQbD_LRAEGGZ4_y4YtTJRNjY6cYsqTR-5Zym6Z23qrGDnWvtKTOcLatsRWPT6xvLKJDP_7DxKLcp1xJe1vdFuUlhOMos6wdVKNMWZGS3iKRZaL87U94EQvWh2Dt--Q7oHxZXWmK_-OybmV22Zi5d3lIDg1WLl52rEO9VLLM9UWgEAQ2PkBRCSXqaaMkgEv2jVb-sAHbEeqaN0uhI1xiIO9xgz-HAnyrF62FGpV-Y6lOCUuA1cERGneyr0w1jKfwov8bE0pgBJ-SNbuSlhzowOetg/p.jpeg",
    "https://uc0d01dfbfe467458ddc1fbc5bfa.previews.dropboxusercontent.com/p/thumb/ACQHBk7t8_-bHRaOAjftKK4GR38cdfD9kh8OKuJBwbUkU7aCiBgLEE5BmQRZNmi6SQIALhCycy5oh4RYByYIE7ibCxZl7-8EcKTAq7rLmjYWxL_BDncjGP0fQklQmLr29UBg8E9pWqTV00dT8Wn4FCo-_yS6p6OGG3m1eHpVs00fGwcJ2UpN3vmRaMZpdXhBRfUqKPyScBZmFx4nOs4O7P2jV2pr6ZQJXi5EpTRqAD1UcERxSa8Ce_veND6Kv-ueMDS5i_nUdJVq1ccKnLpMEYXX6lJtQijApmBE6wrwwBrWdnjW6txna1-ivKxSAkbP6mhvgm_tyuCSskdEDK8-vmPAW5Grjd27R209Xk7Eax_HpA/p.jpeg",
    "https://uc87b37a59344e057de50a65954c.previews.dropboxusercontent.com/p/thumb/ACSs8zfbCz3wKlcM59ex0Rg8SsTQ7xeu1o4KD_RTAOvP5-RFQq0AQlIyxlfDgCXKsSPnxbA1wyMyIouasia3Mw-LORlMdZNgNj416E9wsBl1cy_BjsNIzuXN2XrWKWnYFmSdaBWhJPY-6Y3_0WnIRasxjAqJ3WbdxPli-DiIMLUzFGOTavKHDxmtFXxzbxSjS9sigcMgCCJw1Gl7fvr4mZzu2w9vGEwZ9kQruHsiiH8dsxJJ2lq1EcsUvMYqFLYVpl9fkUqXc4GFbXYGa2YRDcCQPwhoaqliTk1CS934bIm6zYovPfASXyhAxllGanxIdNcgueNrrHCgP5mId1SMf1a2Xtpc4JMds9R-HlRpHkQ5aQ/p.jpeg",
    "https://uc71873e98bf6d8aa55184e7a957.previews.dropboxusercontent.com/p/thumb/ACShfJ4fgFPfQvZdf9JbiqakZB-8b_KtLIL_PFK5dTFRJtdy086HnV32qsByCF90PMF00vY7XCN_LsSEfvFLMjQrHHjdw0U97C1vJjLaYpKG_Rd4to0KXM74Ma2cdTxm5D-8B6hcEHklTLUm3CmKaIg2SS0qbE-RqiL_6Gd7Wupj8DOy3Z-LwuLjiJGzp-dWcGmTiZwFbMOnXzyyRoIw0VpZa6Inh6qTfB_4V5sZHyLBU8GMHZVYJ2Cfg_09veWkJeeK2TU7epAJMm5187DOOdgQG1aL96xLmsZVKrtZq6wQUkJ8jRSuE2V7bR924pvXavN02DZt-5NkogWCYH-tqwVTlm1plPHobNu0D6YevfW_lQ/p.jpeg",
    "https://uc5052706dfd351b443df1c3df2a.previews.dropboxusercontent.com/p/thumb/ACTAoF84y3h3t7br3HNIEkF6dBg_tMBW-gyc8v9WZ1h-WGSfNiZsRgS42s3X7p03YqyUl7Fb9Kl5S5ZFmXqadRiF3HovafmtxMXFUDmsRS75g5JQCZBSXAKQ4wfL4RBInKRWax6dMDd-wZm_hiSgbq7OqqfE9JOwI6IOveqR7DSVMijIbvG3C7gAGO8JR10C41e0PBI8-zGAV8TSVXyWiglKPPoReJ5lbh6OKBfLZCpF5Uh7qCHJyMPTuhUcWmWgnYMackajnw3j4Z8KWT-fjerNsswRLiDlTsWZizYfufHF6QiMoPMJFhj8V9d6z8r_npQ1m8ADHq3UNBHxpU1Ua3MjsK7wU1bSKkt6NI7Ng6scrA/p.jpeg",
    "https://uc5746685b6cab59b6f5ef64ad4c.previews.dropboxusercontent.com/p/thumb/ACRrtsXdbpFWvebxGBRLQr495v_n9IxsC4nKHXxdiGKwWapt_-LuPJikOYxJGKklDxX0EMKYJa3UsgOWSfZwQ4ho-82RK__QoEl99zI9ZtHP7bxV5k6ZS3OJ9CXDhO_7B897Rs2kY6fhCokBzpHqLcSQ1VlD9_ahC17KUOllt-SahkY98FZRKKSKVkh1SEKbczSsSaXusKLha9p1KcadTrwxq3ml-GunYI1OAzm6wwNJROjuffefQh2WcTqsxJsbjdhryhJjk1c-W9v-MBzXX26E0vB87-bqPB08Cj8xZX_9CzhRFLd2VYcaTT15E_ZhWLGk2VrIk6GoNrNIuKhBU2Fjeg6-Bsoq-h5h3uU9pD8wdg/p.jpeg",
    "https://uc637f0ea23792cde73ee3cb7deb.previews.dropboxusercontent.com/p/thumb/ACTpDK2IbQJ-ow9sxOJZhokmFne3fNNAhkXcEPgBPSPixfThjkwvNHu5UqgA50xmjb35RyjKrFO8wF6RDDOwB7SGaj7Zk5BS5i33TK7IndkXnjuV9lfMykUVEUcwCc3IUA5B93GHTVClcoHJP-fcRozuKB8ksumThPLhd1YrETptzexvGdshi5y6BP035A4FXOEG960Yuag8Zsx23S_BW34Okpq2Yopmwvbs9HRvgOSGSRyp_4CfO00dSrE6XGEGBJFupvER-A18cvJwY2ZuET45eyqNTjtevpYSsjYtSxCc1Awc_n8ILRryaYJlsLgzO8Grs62Jm7Oovk-_jcCO6Y9uK8ZrkbIl8-x9d0oYupjOJQ/p.jpeg",
    "https://uc9cb201cd63bca036000dff8255.previews.dropboxusercontent.com/p/thumb/ACTirGK73C2hbojvQ1QrutDWUr4ovQmVT0AbrAKP-_rWlwF4_xDL-oXbJ1MUnmiee0VO0JndiXIrQyNTNhqFL3kY07JTroHG8v8slv2JI4CR19_4Hif7rjg6qi32zanAZ8mn45kRCcFpAydWqjCj7SvZFx9B4Gbnca-Tds1fpUV5ci-o-3vDrz8f5QKZamRV1T0X4OoOyzhnWelpeuevoXQVUzsiit3dk2yx0UIvY03-S9dGf3chaF_LUMc8Y3olHJO_IQ7pyTLWBR6mIS0go0oVQhRUC1eXoiCZqW6JOR9CLx-XKtd0_nKPqat84ZyDaEny46T-Rfg6od4_6dJwcDN34fLoCg6c4XeiGF35p6o2ig/p.jpeg",
    "https://uc092235ac38ca9f152c1ab78aa0.previews.dropboxusercontent.com/p/thumb/ACQVf_OCh8b-0QGUAQDD4ODh3KS8e6H6g7qjFNLxKQ7Yu8GNWQsM3hOIr1Bk7GFhvbB-Bl8cX8NvpTUNDnPBC0SxlBPOi4nTMhYEkMvqA3RUOvQwMn8D2Iq1YqandANjtOykAcVQlzyag2UCV0ldzsSpHDDEmWsJaK_1NH-kPU6PTJtWHeP2totwKaQVvLs64dkbiSOE8PeEiIc7dnUHmKUS5qNKSxB-UKWefx8RIB5ryiEYGibuQM5tygNKvr6MjaDVJNLVBlnO7UOUDBcFkDSJ0DxlODwLijR8rkOVtXMJxyjB3hyzUiEW-RLTzFlBk7Uxmrq-sY4p-ZBv-XXmvaIGNyn8Yf24nCy_C3-Npi1OZA/p.jpeg",
    "https://uc4162bd73ce89c231521cd67c8f.previews.dropboxusercontent.com/p/thumb/ACRvhKhjEbNjUmaqP9Yq82wdwaSsAWcVEL6B3JFC0DcBIb-APw0L4XDoQKcDlOGvmvqxz47jz5JV7Q-rw00sW5uwMt3EveBK9J-lJVPkZ5Z6npAOJ3oUwdzzP-fC3RmDnZpK-32ZEDFICWExkGSXfulLgeszjzXP6hwL7hDLI5BV6vcwMvCOAtPStvCYM-dmkzo_19m5oTIoa-1kWaVrqf7zPI8ZDuTu_l3HFs4sb6j-ZvKalo_2ixocS0FpOjviveQwYak3DunvLCiyAZYcSHD5_l6ewc8biBfrJ6lvo0C4Cf6vqOqcWm6LpeUJymVE8CGGbdDjiZ3FYHuXKCmVuPDygFL-e-R1uGo2UiaissBqaw/p.jpeg",
    "https://uc81c82bba76676e2ce7a7c193b6.previews.dropboxusercontent.com/p/thumb/ACQxYkEiHjMXNHPDu8m8IAd1wnxQVKEQpjJPIDtKhKoYtn5cc-yzpT-boMJdErbwyGpXKxPJaOcYHKmu3EcYVDPndGlrTZey79GeA9EYLa87FO7NIgQbXk7IkQT-W6NkIDpIrtF9Lv6_gQGquGk1Qq8-VQhA_uqnBe8u4MDiyj7lbTkhERfQSP1-VIHK_HaPUWIPtj2zbHxcI-Rmj6C2HaaBAM0U5XWE5JP7D8HNTVw0iUCZTX4t5qCphc5zICwpLISaPuQ45iQBESnZHfFl5LdcvJWX71j9yCF3Ug2AgEgrvCVHHR9EMlDohkLQc2-CkUQ-ifPrzV2nZ5zAOg3LVgCBo09M1YWNyZ7ZVC2l5i3o9w/p.jpeg",
    "https://uc5f02c47436691f82717937b764.previews.dropboxusercontent.com/p/thumb/ACRXaT46bCfDsrYYhwHMIWGCDdGwybZZgrzWV_TGYe8KibGQZcNzJaQGv9NebVxDQ6a8v5xc5zPmJa6eXZ-sdKfS0pufOKXvFCTgOmj1hGG-qVBrRHF_plf3v-diUy10QHjfejZT9J-bYbfwk3qJ-sBnwJq77PpZU2DjJhzrgsHjwgGrJBty-MwAluHAVBZQ2GsniAWbPI90GmAmS2CBtP8vztTDivdF4LunMS6fj03gI2aIa_pyRCTCKMbm-LmRTCbjkS0kCqz7eIF2umwyHZHc_Ut4UXl6v8gPvxSXc3I1a5CdWMgVZotn2cinw1ns4qVaaA0WZVs5byjrKawjU21XgFrEIsIQ-uEOe53CC8RdfA/p.jpeg",
    "https://ucf767a2e6e26dacce7b6c77525e.previews.dropboxusercontent.com/p/thumb/ACSc_M9v4f-asOFPbI55GX2bOkMotyfsGlaw3RNIQxUzT0gSXtS0YOwZnybvopUgpoxK4cCTtp5eQDz3DkflpxUU6zC0m3PfzCK5biFgJoTcx2oL5T33O-mMwISY1op3I5VKKlg42est_ZA_bqBhAcMJS2UEJryXwKdsrDOkUE-zBmWT2mlF56rnXWUUdLU0Kr99RglqMnO0fqycb5qami1RASSt17tRNlUhThByRoRG7s_ZTIPX4f3_x9BndU7snT34rKJDHh1wQy31KBsuzyfQ_m4e8HsH3toXgETBXXslVMtbSf7imakguTwZDx7mzR6ZAGmfPoD6jSXWFPoa46l-P_1Z_yX-Pdw95ZIEkj9plQ/p.jpeg",
    "https://uc165c530ffd5429bc1af181fcbe.previews.dropboxusercontent.com/p/thumb/ACToMs5QJzmT1vEXAutsQmzJZa9QM50KTsPjd_oCf_O1sWMf2timTjdCWDbumfMU4vNGhUSvKFjNUGRa61Di9MDCfXYFJL-RbcWztWjTzQORYZE51SjIjM8zJbUfiyyPjQSx2Dm-xQvLtSyiC7ybOEdbH2pa7FXxdQc0Q80g4I4vvdyMYsKnnLkbkaSo3v-4ohJW6RDKUhFzJiifRReB0cgzLF_rl8hcfSJMhhxg29l7mQCLTqU4az2V1Bx-OHoFxhnGgad9qcQ8vlwsTpJLPjxFClt1HaXeBOi7keVaz_yc2p3upzrXhtlMR7jrMSiedyvrqcTSDnkYewIO7eWS6nDb3aDJx2IS5C2gSZsSo8D1-A/p.jpeg",
    "https://ucf07578cb20cfe7bbc9db3cd6d5.previews.dropboxusercontent.com/p/thumb/ACQznibF3MaKso0BFL8neRZctJaAMy1fkPMhKQ496ileBA0Kil__3jtM3ZpqM6LOLsAxMZQPrxee6zmBYbwy31XSMJn6XHlVOnrOXPtIjIcYTMqoJ3q988fddDV74gLGvlUn4aJAP-kX9t55KJ65D-ihr4qozp1TSZLSjl5LeueJK64q9I8_Z30UTNJso5sYd6j6XyFYonZBvp1F3y_KpkCclZFgL-7orXXhu7TFlSfu1wqd307YRmtDPAjunOTMqZGjH7LMyB2AgeDCiHFlL9Ptc58xYHYG8u5uwQE7u4bGVL3so5H-n2RcvqtYk9vpzWFfn24Lm7MHaaTTbk0XFPGTWfUz4g_KDJKE8kFxe0yt-Q/p.jpeg",
    "https://uc3fc02fbe48fe85e02272e82e70.previews.dropboxusercontent.com/p/thumb/ACSOVgBLuAlQ_GyPswtvCe-9SZJUUWL9_gCIJZNQOrOXG6IxJKjZ3reTCdM7tNqByKiPwj1J9bucPmVedfmag4cJQUkBAAgEaV1IkSaN8DMYMmqXz9tFdjclaWuqgL2SUoFIw1Ai3tjpedVy6PqoabhI-q_zV4_if6UGDRqCawJFmEesxae56qwA1zOAWzwmKOJ40eQFk3aPbO1XCjk_VIXj4R0jiDXXh3J3nbWDqVJVpGUqHHOfk3QGYwSSe3u-U5d8KXzxxIEh2z_tCeKpYhW5o_CB8E09XAkIlq-3Wh0r-8yddhMCp4gI32wb2UQXWfo-2MIwJUJtSYNmzC698Ugi2Iq4gN35NiS9k7C7IhKtxw/p.jpeg",
    "https://uc0319ac2fee4b7dfe5c938c48f5.previews.dropboxusercontent.com/p/thumb/ACS6eAZBNnHobTSDtCQYggm0kdXfan-CfO6aFwDsyGehgbeSEo3TL2c6faV799bRXNQWCKc_OVWZwkMuGAPhwhEiPqIi-xR57rJ079gJW--W9Q3iPy3JV5YFfVycQBEt9vfWCXghCHnkkyb7ONYY5pn_KzihxPWCxdWeZN7zvzmeNoiy5rTJc_8V-Jm4FcGvi8CTxPQ9iJrq3Ws_wtWiWaRIyz6co7pE8rh5z4B4JimH-970wewb50Ljqb_ueK0FXf0V5Sa7YgshUCjzayO_L7N6CW61bPwSFcNN4oD-SHMCbRCpEinMS5eaSVsUCfLWsa55Zwagr-0fpowpqbSnO0cJiJJHM9qx6YRJuKDHbg0_eg/p.jpeg",
    "https://uc50ec7454c321530f6f37a432c9.previews.dropboxusercontent.com/p/thumb/ACT4kV8TzuBIQceXqrJ1_3vNRnPXsXtCr9f8ywEdYystCReztWEQFzOs0sONSoVwiP9NLBEt9iJ1guah35dBrh2w4esGhIlbSP5TXf3-L2R6Tpp5wgoXMTPFGbDD2f72nU9vx_y6QlCVHNnE9wndFV7lPYZvP7rVNkmkQs-2WVA2G4kxmFDTMhseSZ7qyh-04-wVGtG_VoGzDbTbAl1bHNygt01iQnqXlTQ9IR4fDxybzZTJhp7MY-lfMIL5ranlub5ZNVqc0zTEZrImBcOLI7R2v4DyDU0neaHzUxBss8RoU8eEpLl3cWIRd2Xc5dgYLi216azMD_wxGXd1jH6HZiJAzgOja2UVc0D2IW5EsxGJVg/p.jpeg"
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

export default GalleryBlueWillow;
