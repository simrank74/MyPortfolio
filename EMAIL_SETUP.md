# Email Setup Guide for Contact Form

## Overview
The contact form is now configured to send emails to `simrankalsi2003@gmail.com` using EmailJS. This allows users to contact you directly through your website without needing a backend server.

## Step-by-Step Setup

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, click "Email Services" in the left menu
2. Click "Add New Service" button
3. Choose "Gmail" from the list
4. Click "Connect Account" and sign in with your Gmail (simrankalsi2003@gmail.com)
5. After connecting, you'll see a **Service ID** (like `service_abc123`) - copy this!

### Step 3: Create Email Template (Simplified)
1. In your EmailJS dashboard, click "Email Templates" in the left menu
2. Click "Create New Template" button
3. Fill in these fields:
   - **Template Name**: `Contact Form`
   - **Subject**: `New Contact Form Message: {{subject}}`
   - **Content**: Copy and paste this exact template:

```
Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Click "Save" button
5. Copy the **Template ID** (like `template_xyz789`) - you'll need this!

### Step 4: Get Your Public Key
1. In your EmailJS dashboard, click "Account" in the left menu
2. Look for "API Keys" section
3. Copy your **Public Key** (like `user_def456`) - you'll need this!

### Step 5: Update Your Website
1. Open the file `contact.html` in your code editor
2. Find this line in the JavaScript section:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
3. Replace `YOUR_PUBLIC_KEY` with your actual public key from Step 4

4. Find these lines:
   ```javascript
   serviceId: "YOUR_SERVICE_ID",
   templateId: "YOUR_TEMPLATE_ID",
   ```
5. Replace:
   - `YOUR_SERVICE_ID` with your service ID from Step 2
   - `YOUR_TEMPLATE_ID` with your template ID from Step 3

### Step 6: Test Your Contact Form
1. Save the `contact.html` file
2. Refresh your website
3. Go to the Contact page
4. Fill out the form and submit
5. Check your email (simrankalsi2003@gmail.com) - you should receive the message!

## Example Configuration
Your final configuration should look like this:
```javascript
emailjs.init("user_abc123def456");
// ...
serviceId: "service_xyz789",
templateId: "template_contact123",
```

## Troubleshooting
- **No emails received**: Check your spam folder
- **Form not working**: Make sure all IDs are copied correctly
- **Service connection failed**: Try reconnecting your Gmail account

## Free Plan Limits
- 200 emails per month (free)
- Perfect for a portfolio website
- Upgrade available if you need more

That's it! Your contact form will now send emails directly to your Gmail account. 