# GitHub 업로드 가이드

## Git 명령어로 업로드하기 (가장 쉬운 방법)

### 1. Git 설치 확인
```bash
git --version
```

### 2. GitHub 저장소 생성 후 초기화
```bash
cd C:\Users\junsung_An\Desktop\MySite
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[사용자명]/[저장소명].git
git push -u origin main
```

### 3. 이후 업데이트 시
```bash
git add .
git commit -m "Update files"
git push
```

## 웹 인터페이스로 업로드하기

### 폴더 구조 유지 방법:
1. "Add file" → "Upload files"
2. 파일 선택 후, 파일명 앞에 경로 입력:
   - `resource/profile/profile.jpg`
   - `resource/rnd/rnd1-img1.png`
3. 이렇게 하면 자동으로 폴더가 생성됩니다.

