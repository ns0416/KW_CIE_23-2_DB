import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './memberBikeRank.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function MemberBikeRank() {
	const [weekrank, setweekrank] = useState([]);
	useEffect(()=>{
		axios.get("http://seoulbike-kw.namisnt.com:8082/rest/getWeeklyRankingList")
		.then((res=>{
			if(res.data.result === "success") {
				console.log(res.data.data);
				setweekrank(res.data.data);
			}
			else {
				console.log(res.data);
				console.log("get week rank error");
			}
		}))
		.catch((err)=>console.log(err))
	}, [])

    return (
        <>
<div scroll="yes" className={style.ie8m}>
	<div className={`${style.wrap} ${style.my}`} id="sub">
	
	<Header title={"따릉이 이용 랭킹"}/>
    <div className={style.container}>
	<div className={style.content}>
	        <div className={style.my}>
	            <ul className={`${style.tabs} ${style.list}`}>
	            	<li className={`tab-link ${style.current}`} data-tab="tab-1">주간</li>
	            	<li className={"link"} data-tab="tab-2">월간</li>
	            </ul>
	            
	            <div id="tab-1" className={`${"tab-content"} ${style.current}`}>
	            	<h1>전주 월요일~일요일까지의 이용거리 실적<br/>※ 랭킹서비스 이용 거리는 실제 이용 거리와 다를 수 있습니다.</h1>
	            	<h1>나의 랭킹</h1>
	                <div className={`${style.my_box} ${style.list}`}>
	                <table>
	                	<tbody>
							<tr>
	                			<td>95264 등</td>
								<td>vlvksbdof12</td>
								<td>4 km</td>
							</tr>
	                	</tbody>
					</table>
	                </div>
	                <h1>전체 랭킹 목록</h1>
	                <div className={`${style.my_box} ${style.list}`}>
	                <table>
	                	<colgroup>
	                        <col width="10%"/>
	                        <col width="45%"/>
	                        <col width="45%"/>
	                    </colgroup>
	                	<tbody><tr>
	                    	<th className={style.first} style={{textAlign: "center"}}>등수</th>
	                        <th className={style.first} style={{textAlign: "center"}}>아이디</th>
	                        <th className={style.first} style={{textAlign: "center"}}>이용거리</th>
	                    </tr>
	                    <tr>
								<td><img src="../../../public/img/ic_medal_1.svg" alt=""/></td>
									<td>rhee***</td>
								<td>291 km</td>
									</tr>
						<tr>
								<td><img src="../../../public/img/ic_medal_2.svg" alt=""/></td>
									<td>ncj0**</td>
								<td>267 km</td>
									</tr>
						<tr>
								<td><img src="../../../public/img/ic_medal_3.svg" alt=""/></td>
									<td>ojkc**</td>
								<td>256 km</td>
									</tr>
						<tr>
								<td>4</td>
									<td>ansimon4***</td>
								<td>255 km</td>
									</tr>
						
						</tbody>
                        </table>
	                </div>
	            </div>
	            
	            <div id="tab-2" className={"tab-content"} style={{display:"none"}}>
	            	<h1>전월 1일~말일까지의 이용거리 실적<br />※ 랭킹서비스 이용 거리는 실제 이용 거리와 다를 수 있습니다.</h1>
	            	<h1>나의 랭킹</h1>
	            	<div className={`${style.my_box} ${style.list}`}>
	                <table>
	                	<tbody><tr>
	                		<td>110032 등</td>
								<td>vlvksbdof12</td>
							<td>15 km</td>
								</tr>
	                </tbody></table>
	                </div>
	                <h1>전체 랭킹 목록</h1>
	                <div className={`${style.my_box} ${style.list}`}>
	                <table>
	                	<colgroup>
	                        <col width="10%"/>
	                        <col width="45%"/>
	                        <col width="45%"/>
	                    </colgroup>
	                	<tbody><tr>
	                    	<th className={style.first} style={{textAlign: "center"}}>등수</th>
	                        <th className={style.first} style={{textAlign: "center"}}>아이디</th>
	                        <th className={style.first} style={{textAlign: "center"}}>이용거리</th>
	                    </tr>
	                    <tr>
								<td><img src="../../../public/img/ic_medal_1.svg" alt=""/></td>
									<td>rhee***</td>
								<td>1,155 km</td>
									</tr>
						<tr>
								<td><img src="../../../public/img/ic_medal_2.svg" alt=""/></td>
									<td>ojkc**</td>
								<td>1,125 km</td>
									</tr>
						<tr>
								<td><img src="../../../public/img/ic_medal_3.svg" alt=""/></td>
									<td>ansimon4***</td>
								<td>1,048 km</td>
									</tr>
						<tr>
								<td>4</td>
									<td>suum1***</td>
								<td>1,007 km</td>
									</tr>
						<tr>
								<td>5</td>
									<td>juju***</td>
								<td>951 km</td>
									</tr>
						<tr>
								<td>6</td>
									<td>ballb***</td>
								<td>872 km</td>
									</tr>
						<tr>
								<td>7</td>
									<td>sevens***</td>
								<td>821 km</td>
									</tr>
						<tr>
								<td>8</td>
									<td>madok***</td>
								<td>807 km</td>
									</tr>
						<tr>
								<td>9</td>
									<td>robk2***</td>
								<td>802 km</td>
									</tr>
						<tr>
								<td>10</td>
									<td>insuranc***</td>
								<td>787 km</td>
									</tr>
						<tr>
								<td>11</td>
									<td>cool***</td>
								<td>785 km</td>
									</tr>
						<tr>
								<td>12</td>
									<td>tlsghk0***</td>
								<td>775 km</td>
									</tr>
						<tr>
								<td>13</td>
									<td>leejeg***</td>
								<td>758 km</td>
									</tr>
						<tr>
								<td>14</td>
									<td>pismir***</td>
								<td>753 km</td>
									</tr>
						<tr>
								<td>15</td>
									<td>ncj0**</td>
								<td>739 km</td>
									</tr>
						<tr>
								<td>16</td>
									<td>tjgustl***</td>
								<td>731 km</td>
									</tr>
						<tr>
								<td>17</td>
									<td>kisuk9***</td>
								<td>729 km</td>
									</tr>
						<tr>
								<td>18</td>
									<td>andy1***</td>
								<td>726 km</td>
									</tr>
						<tr>
								<td>19</td>
									<td>rim0***</td>
								<td>687 km</td>
									</tr>
						<tr>
								<td>20</td>
									<td>much***</td>
								<td>686 km</td>
									</tr>
						<tr>
								<td>21</td>
									<td>cho37993***</td>
								<td>685 km</td>
									</tr>
						<tr>
								<td>22</td>
									<td>muse***</td>
								<td>684 km</td>
									</tr>
						<tr>
								<td>23</td>
									<td>jus1***</td>
								<td>683 km</td>
									</tr>
						<tr>
								<td>24</td>
									<td>sisu**</td>
								<td>679 km</td>
									</tr>
						<tr>
								<td>25</td>
									<td>luckyang***</td>
								<td>673 km</td>
									</tr>
						<tr>
								<td>26</td>
									<td>koreajaw***</td>
								<td>672 km</td>
									</tr>
						<tr>
								<td>27</td>
									<td>tlss**</td>
								<td>644 km</td>
									</tr>
						<tr>
								<td>28</td>
									<td>0is0***</td>
								<td>629 km</td>
									</tr>
						<tr>
								<td>29</td>
									<td>mtbike***</td>
								<td>629 km</td>
									</tr>
						<tr>
								<td>30</td>
									<td>kjchung1***</td>
								<td>622 km</td>
									</tr>
						<tr>
								<td>31</td>
									<td>ttry***</td>
								<td>620 km</td>
									</tr>
						<tr>
								<td>32</td>
									<td>cshee1***</td>
								<td>597 km</td>
									</tr>
						<tr>
								<td>33</td>
									<td>lwg0**</td>
								<td>592 km</td>
									</tr>
						<tr>
								<td>34</td>
									<td>yis1***</td>
								<td>590 km</td>
									</tr>
						<tr>
								<td>35</td>
									<td>no8lamp***</td>
								<td>575 km</td>
									</tr>
						<tr>
								<td>36</td>
									<td>ge10**</td>
								<td>575 km</td>
									</tr>
						<tr>
								<td>37</td>
									<td>hoju***</td>
								<td>571 km</td>
									</tr>
						<tr>
								<td>38</td>
									<td>yupen***</td>
								<td>571 km</td>
									</tr>
						<tr>
								<td>39</td>
									<td>dh781***</td>
								<td>570 km</td>
									</tr>
						<tr>
								<td>40</td>
									<td>jooyoun***</td>
								<td>559 km</td>
									</tr>
						<tr>
								<td>41</td>
									<td>taekwon1***</td>
								<td>558 km</td>
									</tr>
						<tr>
								<td>42</td>
									<td>khk9***</td>
								<td>553 km</td>
									</tr>
						<tr>
								<td>43</td>
									<td>nyamnya***</td>
								<td>552 km</td>
									</tr>
						<tr>
								<td>44</td>
									<td>peteh***</td>
								<td>545 km</td>
									</tr>
						<tr>
								<td>45</td>
									<td>bycy0***</td>
								<td>541 km</td>
									</tr>
						<tr>
								<td>46</td>
									<td>yisun***</td>
								<td>534 km</td>
									</tr>
						<tr>
								<td>47</td>
									<td>shinh***</td>
								<td>533 km</td>
									</tr>
						<tr>
								<td>48</td>
									<td>ktmf***</td>
								<td>533 km</td>
									</tr>
						<tr>
								<td>49</td>
									<td>imcy***</td>
								<td>533 km</td>
									</tr>
						<tr>
								<td>50</td>
									<td>bnaa5***</td>
								<td>529 km</td>
									</tr>
						<tr>
								<td>51</td>
									<td>coolju***</td>
								<td>528 km</td>
									</tr>
						<tr>
								<td>52</td>
									<td>esunn***</td>
								<td>527 km</td>
									</tr>
						<tr>
								<td>53</td>
									<td>qxcym***</td>
								<td>525 km</td>
									</tr>
						<tr>
								<td>54</td>
									<td>pass***</td>
								<td>524 km</td>
									</tr>
						<tr>
								<td>55</td>
									<td>head***</td>
								<td>523 km</td>
									</tr>
						<tr>
								<td>56</td>
									<td>kmchu***</td>
								<td>519 km</td>
									</tr>
						<tr>
								<td>57</td>
									<td>fprtm***</td>
								<td>519 km</td>
									</tr>
						<tr>
								<td>58</td>
									<td>mjk6**</td>
								<td>517 km</td>
									</tr>
						<tr>
								<td>59</td>
									<td>mh30**</td>
								<td>515 km</td>
									</tr>
						<tr>
								<td>60</td>
									<td>chchun***</td>
								<td>515 km</td>
									</tr>
						<tr>
								<td>61</td>
									<td>kkyyh***</td>
								<td>513 km</td>
									</tr>
						<tr>
								<td>62</td>
									<td>qlqhz***</td>
								<td>512 km</td>
									</tr>
						<tr>
								<td>63</td>
									<td>ssem***</td>
								<td>510 km</td>
									</tr>
						<tr>
								<td>64</td>
									<td>noconc***</td>
								<td>508 km</td>
									</tr>
						<tr>
								<td>65</td>
									<td>wons***</td>
								<td>508 km</td>
									</tr>
						<tr>
								<td>66</td>
									<td>jongwon0***</td>
								<td>508 km</td>
									</tr>
						<tr>
								<td>67</td>
									<td>pass7***</td>
								<td>507 km</td>
									</tr>
						<tr>
								<td>68</td>
									<td>envih***</td>
								<td>506 km</td>
									</tr>
						<tr>
								<td>69</td>
									<td>greenhil***</td>
								<td>505 km</td>
									</tr>
						<tr>
								<td>70</td>
									<td>fredd***</td>
								<td>505 km</td>
									</tr>
						<tr>
								<td>71</td>
									<td>player1***</td>
								<td>504 km</td>
									</tr>
						<tr>
								<td>72</td>
									<td>jagua***</td>
								<td>502 km</td>
									</tr>
						<tr>
								<td>73</td>
									<td>sung1***</td>
								<td>496 km</td>
									</tr>
						<tr>
								<td>74</td>
									<td>wlsl1***</td>
								<td>495 km</td>
									</tr>
						<tr>
								<td>75</td>
									<td>jkl0***</td>
								<td>491 km</td>
									</tr>
						<tr>
								<td>76</td>
									<td>lgd6**</td>
								<td>488 km</td>
									</tr>
						<tr>
								<td>77</td>
									<td>adc7***</td>
								<td>488 km</td>
									</tr>
						<tr>
								<td>78</td>
									<td>holt1***</td>
								<td>486 km</td>
									</tr>
						<tr>
								<td>79</td>
									<td>aci2**</td>
								<td>486 km</td>
									</tr>
						<tr>
								<td>80</td>
									<td>dgk0***</td>
								<td>485 km</td>
									</tr>
						<tr>
								<td>81</td>
									<td>pkotnt8***</td>
								<td>485 km</td>
									</tr>
						<tr>
								<td>82</td>
									<td>g498***</td>
								<td>482 km</td>
									</tr>
						<tr>
								<td>83</td>
									<td>oproso***</td>
								<td>476 km</td>
									</tr>
						<tr>
								<td>84</td>
									<td>nacf8***</td>
								<td>476 km</td>
									</tr>
						<tr>
								<td>85</td>
									<td>ehanse0***</td>
								<td>475 km</td>
									</tr>
						<tr>
								<td>86</td>
									<td>rudal***</td>
								<td>475 km</td>
									</tr>
						<tr>
								<td>87</td>
									<td>Mskim8***</td>
								<td>473 km</td>
									</tr>
						<tr>
								<td>88</td>
									<td>hakju***</td>
								<td>472 km</td>
									</tr>
						<tr>
								<td>89</td>
									<td>wjdals1***</td>
								<td>472 km</td>
									</tr>
						<tr>
								<td>90</td>
									<td>ikun**</td>
								<td>472 km</td>
									</tr>
						<tr>
								<td>91</td>
									<td>wlgp6***</td>
								<td>471 km</td>
									</tr>
						<tr>
								<td>92</td>
									<td>bse4***</td>
								<td>471 km</td>
									</tr>
						<tr>
								<td>93</td>
									<td>doo7***</td>
								<td>470 km</td>
									</tr>
						<tr>
								<td>94</td>
									<td>lejaeun1***</td>
								<td>469 km</td>
									</tr>
						<tr>
								<td>95</td>
									<td>hana***</td>
								<td>467 km</td>
									</tr>
						<tr>
								<td>96</td>
									<td>work***</td>
								<td>465 km</td>
									</tr>
						<tr>
								<td>97</td>
									<td>aint0***</td>
								<td>464 km</td>
									</tr>
						<tr>
								<td>98</td>
									<td>pky5**</td>
								<td>464 km</td>
									</tr>
						<tr>
								<td>99</td>
									<td>cutejenni***</td>
								<td>462 km</td>
									</tr>
						<tr>
								<td>100</td>
									<td>stlv**</td>
								<td>461 km</td>
									</tr>
						</tbody></table>
	                </div>
	                
	            </div>
	            	
	        </div>
	
	        </div>
	    </div>
	    

    </div>
    

</div>
        </>
    );
}

// export default myLeftPage",