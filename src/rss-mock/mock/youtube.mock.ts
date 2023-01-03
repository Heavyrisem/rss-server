const test = (str: string, date: Date) => `
 <entry>
  <id>yt:video:fYVzhmFn3Vc</id>
  <yt:videoId>fYVzhmFn3Vc</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>테스트-${str}</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=fYVzhmFn3Vc"/>
  <author>
   <name>테스트-${str}</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>${date.toISOString()}</published>
  <updated>${date.toISOString()}</updated>
  <media:group>
   <media:title>우주 교도소를 장악한 정체불명의 괴생명체  -  칼리스토 프로토콜 스토리 한눈에 보기</media:title>
   <media:content url="https://www.youtube.com/v/fYVzhmFn3Vc?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/fYVzhmFn3Vc/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI</media:description>
   <media:community>
    <media:starRating count="4270" average="5.00" min="1" max="5"/>
    <media:statistics views="274091"/>
   </media:community>
  </media:group>
 </entry>
`;

export const youtubeRssFeedMock = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/" xmlns="http://www.w3.org/2005/Atom">
 <link rel="self" href="http://www.youtube.com/feeds/videos.xml?channel_id=UCLuDznROytXtnMSDwo5aGJQ"/>
 <id>yt:channel:UCLuDznROytXtnMSDwo5aGJQ</id>
 <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
 <title>GCL 지씨엘</title>
 <link rel="alternate" href="https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ"/>
 <author>
  <name>GCL 지씨엘</name>
  <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
 </author>
 <published>2015-03-20T03:55:22+00:00</published>

${test('1', new Date('2023-01-01'))}
${test('2', new Date('2023-01-02'))}
${test('3', new Date('2023-01-03'))}
${test('4', new Date('2023-01-04'))}
${test('4', new Date('2023-01-04'))}

 <entry>
  <id>yt:video:fYVzhmFn3Vc</id>
  <yt:videoId>fYVzhmFn3Vc</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>우주 교도소를 장악한 정체불명의 괴생명체  -  칼리스토 프로토콜 스토리 한눈에 보기</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=fYVzhmFn3Vc"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-12-30T11:00:31+00:00</published>
  <updated>2022-12-30T14:34:46+00:00</updated>
  <media:group>
   <media:title>우주 교도소를 장악한 정체불명의 괴생명체  -  칼리스토 프로토콜 스토리 한눈에 보기</media:title>
   <media:content url="https://www.youtube.com/v/fYVzhmFn3Vc?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/fYVzhmFn3Vc/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1544020/The_Callisto_Protocol/

[Source From]
* Movie: The Thing (2011) - https://bit.ly/3hUGXcD
* Game: Dead Space (2008) - https://bit.ly/3Gs8TOu
* Game: Dead Space (2023) - https://bit.ly/3vmB9vp
* Game: Dead Space 2 (2011) - https://bit.ly/3jzPH8k
* Game: House of Ash (2021) - https://bit.ly/3PYLK9c

#스토리한눈에보기 #칼리스토프로토콜</media:description>
   <media:community>
    <media:starRating count="4270" average="5.00" min="1" max="5"/>
    <media:statistics views="274091"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:iMZcy7hX_j4</id>
  <yt:videoId>iMZcy7hX_j4</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>방탕하고 야만적이었던 대해적의 시대</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=iMZcy7hX_j4"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-12-24T12:30:17+00:00</published>
  <updated>2023-01-02T08:04:35+00:00</updated>
  <media:group>
   <media:title>방탕하고 야만적이었던 대해적의 시대</media:title>
   <media:content url="https://www.youtube.com/v/iMZcy7hX_j4?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i2.ytimg.com/vi/iMZcy7hX_j4/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/242050/Assassins_Creed_IV_Black_Flag/

[Source From]
* GAME: Skull and Bones (2023) - https://bit.ly/3Yxo7so
* GAME: Napoleon: Total War (2010) - https://bit.ly/2Fd2g2W

#스토리한눈에보기 #어쌔신크리드 #블랙플래그</media:description>
   <media:community>
    <media:starRating count="4416" average="5.00" min="1" max="5"/>
    <media:statistics views="321112"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:tmqOuzoSMS8</id>
  <yt:videoId>tmqOuzoSMS8</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>범죄자로 이루어진 이교도 전문 특수부대  -  워해머 40K 다크타이드 스토리 한눈에 보기 (Warhammer 40,000 Darktide Full Story Movie)</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=tmqOuzoSMS8"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-12-17T10:00:35+00:00</published>
  <updated>2022-12-26T08:22:09+00:00</updated>
  <media:group>
   <media:title>범죄자로 이루어진 이교도 전문 특수부대  -  워해머 40K 다크타이드 스토리 한눈에 보기 (Warhammer 40,000 Darktide Full Story Movie)</media:title>
   <media:content url="https://www.youtube.com/v/tmqOuzoSMS8?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i1.ytimg.com/vi/tmqOuzoSMS8/hqdefault.jpg" width="480" height="360"/>
   <media:description>버민타이드 시리즈를 제작한 워해머 게임의 명가 &quot;Fatshark&quot;의 최신작이자

IGN 평점 8위, 스팀 전세계 판매 순위 1위에 빛나는 워해머 40K의 신작 게임

&quot;Warhammer 40K: Darktide&quot;를 지금 체험해 보세요!  👉  http://bit.ly/3uZl1zQ


※ 본 영상은 Fatshark의 유료 광고를 포함하고 있습니다.

※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI


[Source From]
* Game: Total War Warhammer 3 (2022) - https://bit.ly/32pwJZW
* Game: Necromunda Hired Gun (2021) - https://bit.ly/3YF3Wca
* Game: Necromunda Underhive Wars (2020) - https://bit.ly/3WFOuL9
* Game: Warhammer 40,000 Gladius (2018) - https://bit.ly/3j5mQsi
* Game: Warhammer 40,000 Kill Team (2021) - https://bit.ly/3fHSGqc
* Game: Warhammer 40,000 Chaos Gate (2022) - https://bit.ly/3GK9hWb
* Game: Warhammer 40,000 Armageddon (2014) - https://bit.ly/3Wp1pkh
* Game: Warhammer 40,000 Dawn of War (2006) - https://bit.ly/34WWTUE
* Game: Warhammer 40,000 Dawn of War 2 (2009) - https://bit.ly/34WWTUE
* Game: Warhammer 40,000 Dawn of War 3 (2017) - https://bit.ly/3IkTjC9
* Game: Warhammer 40,000 Space Marine 2 (2023) - https://bit.ly/3huLQZt
* Game: Warhammer 40,000 Inquisitor Martyr (2018) - https://bit.ly/3AiHdqh
* Game: Warhammer 40,000 Battlefleet Gothic Armada (2016) - https://bit.ly/3GQfxf1
* Game: Warhammer 40,000 Battlefleet Gothic Armada 2 (2019) - https://bit.ly/3tIQTco

#스토리한눈에보기 #다크타이드 #워해머</media:description>
   <media:community>
    <media:starRating count="5452" average="5.00" min="1" max="5"/>
    <media:statistics views="306197"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:btZu1v7kBDY</id>
  <yt:videoId>btZu1v7kBDY</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>내 딸을 납치한 종교인들의 정체가 수상하다  -  바이오하자드 빌리지 스토리 한눈에 보기 (Biohazard Village Full Story Movie)</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=btZu1v7kBDY"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-12-10T10:00:19+00:00</published>
  <updated>2022-12-14T00:40:30+00:00</updated>
  <media:group>
   <media:title>내 딸을 납치한 종교인들의 정체가 수상하다  -  바이오하자드 빌리지 스토리 한눈에 보기 (Biohazard Village Full Story Movie)</media:title>
   <media:content url="https://www.youtube.com/v/btZu1v7kBDY?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/btZu1v7kBDY/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1196590/Resident_Evil_Village/


&quot;마을 사람들이 홀려 섬기던 사이비 교주의 비밀...?&quot;

오늘 들려드릴 게임 스토리는 『바이오하자드 빌리지』 입니다!

폭력적이고 잔혹한 연출로 차마 채널에 연재하지 못했던 '바이오하자드 7'의 후속작인 만큼

전작을 한번도 보거나 플레이하지 않아도 충분히 이해가 되게끔 열심히 제작해보았습니다.

(사실상 바이오하자드 7, 8편의 합본이라고 보시면 되겠네요)

호러 액션 장르를 좋아해, 다양한 동장르의 게임을 접해본 저로서도 너무나도 재밌게 즐긴 작품인데요

각 지역마다 전달하는 공포나 액션, 분위기, 인물이 천차만별로 달라서

마치 공포 게임의 테마 파크를 다녀온 듯한 느낌을 만끽하실 수 있는 게임이라 할 수 있겠습니다.

시청하시기에 약간 영상이 길더라도, 작년 GOTY 수상작에 걸맞는 명작인만큼 즐거운 시청이 되시길 바래요 :)

오늘도 찾아주셔서 감사드립니다. 게임으로 행복한 삶이 되시길!


#스토리한눈에보기 #바이오하자드 #레지던트이블</media:description>
   <media:community>
    <media:starRating count="7039" average="5.00" min="1" max="5"/>
    <media:statistics views="456988"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:tnPiFpj0qJo</id>
  <yt:videoId>tnPiFpj0qJo</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>낯선 이세계로 떨어져버린 '군필' 여고생</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=tnPiFpj0qJo"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-11-19T10:00:27+00:00</published>
  <updated>2022-12-19T12:22:26+00:00</updated>
  <media:group>
   <media:title>낯선 이세계로 떨어져버린 '군필' 여고생</media:title>
   <media:content url="https://www.youtube.com/v/tnPiFpj0qJo?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i1.ytimg.com/vi/tnPiFpj0qJo/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ &quot;Music: Royalty Free Music from https://timtaj.com&quot;

※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1306630/Lost_Ruins/

[Source From]
* Anime: Shinchan (1992) - https://bit.ly/3EuPCe8
* Game: Dead Cells (2018) - https://bit.ly/2JWJQHr
* Game: Dark Souls Remastered (2018) - https://bit.ly/2LoEJNm
* Game: The Elder Scrolls V Skyrim Special Edition (2016) - https://bit.ly/2K1fJ1v

#스토리한눈에보기 #로스트루인즈 #인디게임</media:description>
   <media:community>
    <media:starRating count="6328" average="5.00" min="1" max="5"/>
    <media:statistics views="419279"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:RylHKwWkWzo</id>
  <yt:videoId>RylHKwWkWzo</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>미국이 반드시 은폐해야만 했던 치욕스러운 작전  -  모던 워페어 스토리 한눈에 보기 (Modern Wafare 2022 Full Story Movi</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=RylHKwWkWzo"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-11-12T10:00:24+00:00</published>
  <updated>2022-11-17T21:55:26+00:00</updated>
  <media:group>
   <media:title>미국이 반드시 은폐해야만 했던 치욕스러운 작전  -  모던 워페어 스토리 한눈에 보기 (Modern Wafare 2022 Full Story Movi</media:title>
   <media:content url="https://www.youtube.com/v/RylHKwWkWzo?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/RylHKwWkWzo/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1938090/_____II_2022/


오늘 들려드릴 게임 스토리는 &quot;콜 오브 듀티 : 모던 워페어 2 (2022)&quot; 입니다!

불안정한 세계 정세가 이어지던 2022년의 오늘

비인가 작전을 거침없이 수행하던 다국적 특수부대, 태스크포스 141은

이란에서 나와 테러리스트와 접촉한 위험인물, 핫산을 생포하고자 임무를 개시하지만

사건은 걷잡을 수 없는 혼돈의 소용돌이 속으로 빠지기 시작합니다...

가장 리얼한 현대전을 그려낸 작품으로 유명한 모던 워페어 시리즈의 최신작!

4K 화질과 함께, 맛있는 간식과 함께 영화처럼 감상해보십시오.

오늘도 찾아주셔서 감사드립니다. 게임으로 행복한 삶이 되시길!


[Source From]
Game: Call of Duty 4: Modern Wafare (2007) - http://bit.ly/3uS4iMD
Game: Call of Duty: Modern Wafare 2 (2009) - http://bit.ly/3fY4x7e
Game: Call of Duty: Modern Warfare (2019) - http://bit.ly/3DZnVIT
Game: Call of Duty: Black Ops Cold War (2020) - http://bit.ly/3EnMdxz

#스토리한눈에보기 #모던워페어 #콜오브듀티</media:description>
   <media:community>
    <media:starRating count="8466" average="5.00" min="1" max="5"/>
    <media:statistics views="670499"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:AxUvIDt0SI4</id>
  <yt:videoId>AxUvIDt0SI4</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>악마조차 두려워할 지옥의 헤비메탈</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=AxUvIDt0SI4"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-11-05T10:00:11+00:00</published>
  <updated>2022-11-10T09:37:42+00:00</updated>
  <media:group>
   <media:title>악마조차 두려워할 지옥의 헤비메탈</media:title>
   <media:content url="https://www.youtube.com/v/AxUvIDt0SI4?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i2.ytimg.com/vi/AxUvIDt0SI4/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1061910/Metal_Hellsinger/


메탈 헬싱어는 제가 올해 최고로 뽑는 인디 게임 중 하나로서

플레이 하는 내내 극강의 전율을 느끼게 해주는 작품입니다.

이 게임만을 위해 쓰여진 수많은 명곡들과 더불어

호쾌한 비트와 노래에 딱맞게 펼쳐지는 화려한 액션까지

스트레스 푸는데는 이만한 게임이 없다고 느껴질 정도입니다.

특히 마지막 보스를 만났을 때의 전율은 정말이지... 크...

22년도의 게임 경험 중, 최고의 한순간으로 뽑아도 부족함이 없을 장면이었습니다.

그렇기에 최대한 그 전율과 화끈함을 느끼실 수 있도록

최선을 다해 편집했으니, 즐겁게 시청해주시면 감사드리겠고

스토리를 알아도 너무나도 재밌는 게임이니까 꼭 직접 구매해서 즐겨보시기도 강추드립니다 :)

오늘도 찾아주셔서 감사드립니다. 게임으로 행복한 삶이 되시길!


[Source From]
* Game: Doom Eternal (2020) - https://bit.ly/2KMzZDw

#스토리한눈에보기 #메탈헬싱어 #헤비메탈</media:description>
   <media:community>
    <media:starRating count="5043" average="5.00" min="1" max="5"/>
    <media:statistics views="382371"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:Ij0jPopqVVo</id>
  <yt:videoId>Ij0jPopqVVo</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>도시의 20만 인구가 한순간에 증발해버렸다</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=Ij0jPopqVVo"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-10-29T10:00:11+00:00</published>
  <updated>2022-10-30T07:31:58+00:00</updated>
  <media:group>
   <media:title>도시의 20만 인구가 한순간에 증발해버렸다</media:title>
   <media:content url="https://www.youtube.com/v/Ij0jPopqVVo?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i2.ytimg.com/vi/Ij0jPopqVVo/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1475810/Ghostwire_Tokyo/


오늘 들려드릴 게임 스토리는 &quot;고스트와이어 : 도쿄&quot; 입니다!

일본의 심장과도 같은 도시 도쿄에서, 갑자기 증발해버린 20만 명의 사람들.

그리고 교통사고를 당해 생과 사의 기로에 놓여있던 청년, 아키토에게

도시를 떠돌던 한 영혼이 빙의를 해오는데...

과연 두 사람은 도시의 원혼들을 해방시키고

이 끔찍한 사건의 진실을 모두 파헤칠 수 있을까요?

오늘도 찾아주셔서 감사드립니다. 게임으로 행복한 삶이 되시길!


[Source From]
* Game: Silent Hill F (2023) - https://bit.ly/3U550CO
* Game: Overwatch 2 (2022) - https://bit.ly/3U4HNko
* Game: Dead by Daylight (2016) - https://bit.ly/3NkVU2U
* Game: The Elder Scrolls 3 Morrowind (2002) - https://bitl.y/2smAM3b
* Movie: Mother (2020) - https://bit.ly/3zmiLW0
* Movie: As The Gods Will (2014) - https://bit.ly/3zj24us
* Anime You're Uner Arrest (1994) - https://bit.ly/3U8KYaM

#스토리한눈에보기 #고스트와이어 #도쿄</media:description>
   <media:community>
    <media:starRating count="7983" average="5.00" min="1" max="5"/>
    <media:statistics views="711626"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:in7Tu1b3Cxo</id>
  <yt:videoId>in7Tu1b3Cxo</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>타짜 (프랑스어)</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=in7Tu1b3Cxo"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-10-22T10:00:34+00:00</published>
  <updated>2022-11-01T18:26:29+00:00</updated>
  <media:group>
   <media:title>타짜 (프랑스어)</media:title>
   <media:content url="https://www.youtube.com/v/in7Tu1b3Cxo?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i2.ytimg.com/vi/in7Tu1b3Cxo/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1371720/Card_Shark/


카드샤크는 플레이하는 내내 저를 몇번이고 놀라게 한 게임입니다.

고흐의 작품을 보는 듯한 아름다운 디자인에 놀라고

마치 중세 프랑스를 직접 방문한 듯, 귀가 황홀해지는 OST에 놀라고

온갖 카드 트릭들을 소개하는 기발한 게임플레이에 놀라고

잘 짜여진 한 편의 연극을 보는 듯한, 흥미진진한 스토리에 놀라니

카드샤크야말로 가히 2022년 최고의 인디 게임 중 하나라 할 수 있죠!

부디 더 많은 분들이 이 멋진 타짜의 이야기를 접하길 바라며

오늘도 찾아주셔서 감사드립니다. 게임으로 행복한 삶이 되시길!


[Source From]
* Movie: Barry Lyndon (1975) - https://bit.ly/3s4PdYG
* Movie: Casanova (2005) - https://youtu.be/VwO5K0J-j2c
* Movie: Les Miserables (2012) - https://youtu.be/D2wibFUsEic
* Music: Ghostface Playa: Why Not - https://youtu.be/Hh5jEQraXaw
* Assassin’s Creed Unity: Rob Zombie’s French Revolution - https://youtu.be/TEjcVvxjZIc

#스토리한눈에보기 #카드샤크</media:description>
   <media:community>
    <media:starRating count="8275" average="5.00" min="1" max="5"/>
    <media:statistics views="573655"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:A0q00Fev0FY</id>
  <yt:videoId>A0q00Fev0FY</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>SCP 재단이라는 회사에 합격했는데 다녀도 괜찮을까요?</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=A0q00Fev0FY"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-10-15T10:00:12+00:00</published>
  <updated>2022-10-22T14:00:09+00:00</updated>
  <media:group>
   <media:title>SCP 재단이라는 회사에 합격했는데 다녀도 괜찮을까요?</media:title>
   <media:content url="https://www.youtube.com/v/A0q00Fev0FY?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i2.ytimg.com/vi/A0q00Fev0FY/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/1718130/SCP_Secret_Files/

SCP 재단 로고를 포함한 SCP 재단 관련 콘텐츠는 Creative Commons Sharelike 3.0에 따라 라이선스가 부여되며, 모든 컨셉의 출처는 https://scpwiki.com/ 및 해당 저자에서 비롯됩니다. 이 콘텐츠들에서 파생된 본 영상은 이에 따라 크리에이티브 커먼즈 Sharealike 3.0에 따라 배포됩니다.

[Source From]
* Movie: Counjering (2015) - https://bit.ly/3VrPClE
* Game: SCP Containment Breach (2022) - https://bit.ly/3yH1DtF
* CC: SCP-173 Containment Breach (2021) - https://bit.ly/3EIYHjX
* CC: SCP-096 Film (2020) - https://bit.ly/3yH5E1f
* SCP: 096 - https://bit.ly/3RXp8FL
* SCP: 173 - https://bit.ly/3yJYiKl
* SCP: 239 - https://bit.ly/3EJYZHw
* SCP: 426 - https://bit.ly/3EIVEbr
* SCP: 701  - https://bit.ly/3S1zMva
* SCP: 1762 - https://bit.ly/3fYGcO8

#스토리한눈에보기 #SCP #시크릿파일</media:description>
   <media:community>
    <media:starRating count="16521" average="5.00" min="1" max="5"/>
    <media:statistics views="1407683"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:qvZHJHYmGCM</id>
  <yt:videoId>qvZHJHYmGCM</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>삽 한자루로 세상을 제패해버린 기사</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=qvZHJHYmGCM"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-10-08T10:00:29+00:00</published>
  <updated>2022-10-11T20:41:17+00:00</updated>
  <media:group>
   <media:title>삽 한자루로 세상을 제패해버린 기사</media:title>
   <media:content url="https://www.youtube.com/v/qvZHJHYmGCM?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i2.ytimg.com/vi/qvZHJHYmGCM/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다 : https://bit.ly/3C3DzTI

※ 게임 구매 링크 :: https://store.steampowered.com/app/250760/Shovel_Knight_Treasure_Trove/


'세상을 구한 위대한 용사, 그의 무기는 바로 삽이라네!'

오늘 들려드릴 게임 스토리는 &quot;삽질 기사&quot; 입니다.

넘쳐나는 보물과 모험 덕에, 대모험가의 시대를 맞이한 옛 세계.

그 중, 가장 위대한 모험가였던 한 사내의 무기는

다름아닌, '삽'이었다고 전해지는데...

위대한 모험가이자 용사인 '삽질 기사'의 전설적인 모험담을 지금 바로 만나보세요!

오늘도 찾아주셔서 감사드립니다. 게임으로 행복한 삶이 되시길!


[Source From]
* Game: Rival of Aether (2017) - https://bit.ly/2yTvK26
* Game: God of War 3 Remastered (2015) - https://bit.ly/3Cdms0N
* Game: Hearthstone (2014) - https://hearthstone.blizzard.com/ko-kr
* Anime: JoJo's Bizarre Adventure (2012) - https://bit.ly/3T2t4G2
* Effect: Free Explosion 2D FX animation By RTFX animation - https://bit.ly/3T2a36t
* Video: DOOR STUCK! DOOR STUCK! by KinetiK001 - https://youtu.be/VqB1uoDTdKM

#스토리한눈에보기 #삽질기사</media:description>
   <media:community>
    <media:starRating count="7116" average="5.00" min="1" max="5"/>
    <media:statistics views="491183"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:87RuW4uY1Qg</id>
  <yt:videoId>87RuW4uY1Qg</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>북한군 섬멸을 위해 제작된 수백억짜리 나노슈트</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=87RuW4uY1Qg"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-10-01T10:00:05+00:00</published>
  <updated>2022-10-14T04:09:11+00:00</updated>
  <media:group>
   <media:title>북한군 섬멸을 위해 제작된 수백억짜리 나노슈트</media:title>
   <media:content url="https://www.youtube.com/v/87RuW4uY1Qg?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i1.ytimg.com/vi/87RuW4uY1Qg/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다.

※ 게임 구매 링크 :: https://store.steampowered.com/app/1715130/Crysis_Remastered/

[Source From]
* Game: Homefront (2011) - https://bit.ly/3ChCIPB
* Game: Battlefleet Gothic Armada 2 (2019) - https://bit.ly/3tIQTco
* Game: Call of Duty Advanced Warfare (2014) - https://bit.ly/3jygMqc
* Movie: G. I. Joe 2 (2013) - https://bit.ly/3riOWkQ
* Movie: The Sum of All Fears (2002) - https://bit.ly/3RothCh
* Movie: Taegukgi The Brotherhood of War (2005) - https://bit.ly/3SDOjOa

#스토리한눈에보기 #크라이시스</media:description>
   <media:community>
    <media:starRating count="8010" average="5.00" min="1" max="5"/>
    <media:statistics views="895688"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:RUSbHt5JUjA</id>
  <yt:videoId>RUSbHt5JUjA</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>납치된 딸을 되찾고자 10년만에 죽음에서 돌아온 아버지  -  바이오쇼크 2 스토리 한눈에 보기 (Bioshock 2 Full Story Movie)</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=RUSbHt5JUjA"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-09-23T10:00:28+00:00</published>
  <updated>2022-10-04T06:30:53+00:00</updated>
  <media:group>
   <media:title>납치된 딸을 되찾고자 10년만에 죽음에서 돌아온 아버지  -  바이오쇼크 2 스토리 한눈에 보기 (Bioshock 2 Full Story Movie)</media:title>
   <media:content url="https://www.youtube.com/v/RUSbHt5JUjA?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/RUSbHt5JUjA/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다.

※ 게임 구매 링크 :: https://store.steampowered.com/app/409720/BioShock_2_Remastered/

[Source From]
* Game: Paper, Please (2013) - https://bit.ly/3ScYAk8
* Game: The Outlast Trials (2022) - https://bit.ly/31TCxuB
* Movie: Equlibrium (2002) - https://bit.ly/3UfFk7r
* Movie: Zero Dark Thirty (2012) - https://bit.ly/3BIaNqH
* Movie: 2001 Space Odyssey (1968) - https://bit.ly/36VNSJj
* CC: World War 2 Real Devastating footage - https://bit.ly/3oYEYUy
* CC: 1946 Hiroshima Aftermath 1946 US Airforce Film - https://bit.ly/3DBgo4r
* CC: A Story of the Atomic Bomb | Ban Nuclear Weapons - https://bit.ly/3LlvI73

#스토리한눈에보기 #바이오쇼크</media:description>
   <media:community>
    <media:starRating count="4471" average="5.00" min="1" max="5"/>
    <media:statistics views="325716"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:ZusDbtFw_gE</id>
  <yt:videoId>ZusDbtFw_gE</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>뭔가 이상한 동물들의 사이비종교</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=ZusDbtFw_gE"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-09-10T10:30:07+00:00</published>
  <updated>2022-10-13T06:42:30+00:00</updated>
  <media:group>
   <media:title>뭔가 이상한 동물들의 사이비종교</media:title>
   <media:content url="https://www.youtube.com/v/ZusDbtFw_gE?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/ZusDbtFw_gE/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다.

※ 게임 구매 링크 :: https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/\

컬트 오브 더 램

[Source From]
Game: Elden Ring (2022) - https://bit.ly/3xf5fm1
Game: Have a Nice Death (2022) - https://bit.ly/3DeSgEx
Sanctus by Libera Official - https://youtu.be/hAiECJf5Ouo
Scatman (ski-ba-bop-ba-dop-bop) by Scatman John - https://youtu.be/Hy8kmNEo1i8

#스토리한눈에보기 #컬트오브더램</media:description>
   <media:community>
    <media:starRating count="7876" average="5.00" min="1" max="5"/>
    <media:statistics views="571723"/>
   </media:community>
  </media:group>
 </entry>
 <entry>
  <id>yt:video:nDubH5yV0Vg</id>
  <yt:videoId>nDubH5yV0Vg</yt:videoId>
  <yt:channelId>UCLuDznROytXtnMSDwo5aGJQ</yt:channelId>
  <title>제국 최고 암살자의 연인이 살해당한 날</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=nDubH5yV0Vg"/>
  <author>
   <name>GCL 지씨엘</name>
   <uri>https://www.youtube.com/channel/UCLuDznROytXtnMSDwo5aGJQ</uri>
  </author>
  <published>2022-09-02T11:00:36+00:00</published>
  <updated>2022-10-13T05:44:26+00:00</updated>
  <media:group>
   <media:title>제국 최고 암살자의 연인이 살해당한 날</media:title>
   <media:content url="https://www.youtube.com/v/nDubH5yV0Vg?version=3" type="application/x-shockwave-flash" width="640" height="390"/>
   <media:thumbnail url="https://i3.ytimg.com/vi/nDubH5yV0Vg/hqdefault.jpg" width="480" height="360"/>
   <media:description>※ 본 영상은 산돌구름 산돌 폰트로 제작되었습니다.

※ 게임 구매 링크 :: https://store.steampowered.com/app/205100/Dishonored/

[Source From]
* Game: Kingdom Come: Deliverance(2018) - https://bit.ly/2IOE49u
* Animation: JoJo's Bizarre Adventure Stardust Crusaders (2014) - https://bit.ly/3Ru02OL

#스토리한눈에보기 #디스아너드</media:description>
   <media:community>
    <media:starRating count="6832" average="5.00" min="1" max="5"/>
    <media:statistics views="505585"/>
   </media:community>
  </media:group>
 </entry>
</feed>`;
