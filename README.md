# 개인 포트폴리오 웹사이트

자기소개서 및 포트폴리오를 위한 개인 웹사이트입니다.

## 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 자기소개 섹션
- ✅ 포트폴리오 프로젝트 섹션
- ✅ 연락처 폼
- ✅ 현대적이고 세련된 UI/UX

## 사용 방법

1. `index.html` 파일을 웹 브라우저에서 열기
2. 또는 로컬 서버를 실행하여 사용:
   ```bash
   # Python 3 사용 시
   python -m http.server 8000
   
   # Node.js 사용 시 (http-server 설치 필요)
   npx http-server
   ```

## 커스터마이징

### 개인 정보 수정

1. **자기소개 섹션** (`index.html`의 `#about` 섹션):
   - 본인의 소개 내용으로 수정
   - 기술 스택 태그 수정
   - 통계 숫자 수정

2. **포트폴리오 섹션** (`index.html`의 `#portfolio` 섹션):
   - 프로젝트 제목, 설명 수정
   - 사용 기술 태그 수정
   - 프로젝트 링크 추가 (있는 경우)

3. **연락처 섹션** (`index.html`의 `#contact` 섹션):
   - 이메일, LinkedIn, GitHub 링크 수정
   - 연락처 폼은 실제 서버 연동 필요 (현재는 데모)

### 색상 변경

`styles.css` 파일의 `:root` 변수에서 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #6366f1;  /* 메인 색상 */
    --primary-dark: #4f46e5;   /* 어두운 메인 색상 */
    --secondary-color: #8b5cf6; /* 보조 색상 */
    /* ... */
}
```

### 프로필 이미지 추가

1. 프로필 이미지 파일 준비
2. `index.html`의 `.hero-image` 섹션에서 SVG 부분을 실제 이미지로 교체:
   ```html
   <img src="your-profile-image.jpg" alt="프로필" class="profile-image">
   ```

## 파일 구조

```
MySite/
├── index.html      # 메인 HTML 파일
├── styles.css      # 스타일시트
├── script.js       # JavaScript 기능
└── README.md       # 이 파일
```

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 향후 개선 사항

- [ ] 다크 모드 지원
- [ ] 다국어 지원
- [ ] 블로그 섹션 추가
- [ ] 실제 백엔드 연동 (연락처 폼)
- [ ] 프로젝트 상세 페이지
- [ ] 애니메이션 효과 강화

## 라이선스

이 프로젝트는 개인 사용을 위해 제작되었습니다.



