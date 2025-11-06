# lemina - market intelligence platform

a next.js application for african tech market intelligence, featuring a public marketing site, founder portal, and investor dashboard.

## features

- **marketing site**: public landing pages explaining the product
- **founder portal**: form for tech founders to submit company profiles
- **investor dashboard**: authenticated area for browsing companies and data
- **supabase integration**: postgresql database with proper schema
- **typescript**: full type safety
- **responsive design**: mobile-friendly dark theme with green accents

## tech stack

- next.js 16 (app router)
- typescript
- supabase (database + auth)
- css (custom styling, no framework)

## setup

1. **clone and install dependencies**
   ```bash
   npm install
   ```

2. **environment variables**
   copy `.env.example` to `.env.local` and fill in your supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
   
   update `.env.local` with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

3. **run development server**
   ```bash
   npm run dev
   ```

4. **access the application**
   - marketing site: http://localhost:3000
   - founder form: http://localhost:3000/founders
   - investor dashboard: http://localhost:3000/app/login

## project structure

```
app/
├── page.tsx                    # landing page
├── layout.tsx                  # root layout
├── globals.css                 # all styling
├── founders/page.tsx           # founder submission form
├── thank-you/page.tsx          # form success page
├── app/                        # investor dashboard (protected)
│   ├── layout.tsx              # dashboard layout
│   ├── login/page.tsx          # magic link login
│   ├── companies/page.tsx      # companies list
│   ├── companies/[id]/page.tsx # company detail
│   └── settings/page.tsx       # user settings
└── api/
    ├── submit-company/route.ts # form submission endpoint
    └── companies/route.ts      # companies data endpoint

components/                     # reusable ui components
lib/
├── supabase/                   # supabase clients
└── utils.ts                    # helper functions
public/assets/                  # images and static files
```

## api endpoints

- `POST /api/submit-company` - submit founder form data
- `GET /api/companies` - fetch companies list (protected)

## database

the application expects the following supabase tables:
- `companies` - main company data
- `funding_rounds` - investment rounds
- `metrics` - traction data
- `regulatory_info` - licenses and compliance
- `investor_users` - authenticated users

## deployment

deploy to vercel:

1. push to github
2. connect vercel to repository
3. add environment variables in vercel dashboard
4. deploy

## features implemented

✅ next.js migration from html  
✅ supabase integration  
✅ form submission api  
✅ investor authentication  
✅ companies dashboard  
✅ responsive design  
✅ typescript support  

## next steps

- implement email notifications
- add more advanced filtering
- create admin panel
- add company verification workflow
- implement data export features