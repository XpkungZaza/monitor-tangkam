<template>
  <div class="login-card-container">
    <!-- Main Card -->
    <div class="login-card">
      
      <!-- Left Panel: Information & Illustration -->
      <div class="login-panel login-panel--left">
        <h2 class="login-panel__title">ระบบมอนิเตอร์ทางข้ามเชียงใหม่</h2>
        
        <div class="login-panel__illustration">
          <div class="illustration-icons">
            <span class="mdi mdi-walk walk-icon"></span>
            <span class="mdi mdi-traffic-light traffic-icon"></span>
          </div>
          <div class="crosswalk-stripes">
            <div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
        
        <div class="login-panel__footer">
          เทศบาลนครเชียงใหม่ | <a href="#" target="_blank">เข้าชมเว็บไซต์</a>
        </div>
      </div>
      
      <!-- Right Panel: Auth Forms -->
      <div class="login-panel login-panel--right">
        
        <!-- Tabs -->
        <div class="auth-tabs">
          <button 
            class="auth-tab" 
            :class="{ active: activeTab === 'login' }" 
            @click="activeTab = 'login'; errorMsg = ''"
          >
            เข้าสู่ระบบ
          </button>
          <button 
            class="auth-tab" 
            :class="{ active: activeTab === 'register' }" 
            @click="activeTab = 'register'; errorMsg = ''"
          >
            สมัครสมาชิก
          </button>
        </div>

        <div v-if="errorMsg" class="auth-error animate-fade-in">{{ errorMsg }}</div>
        
        <!-- ================= LOGIN FORM ================= -->
        <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="auth-form animate-fade-in">
          <div class="form-group">
            <input type="email" v-model="loginEmail" required placeholder="Email" class="auth-input" />
          </div>
          
          <div class="form-group">
            <input type="password" v-model="loginPassword" required placeholder="Password" class="auth-input" />
          </div>
          
          <div class="form-group remember-group">
            <label class="remember-label">
              <input type="checkbox" v-model="rememberMe" />
              <span class="custom-checkbox"><span class="mdi mdi-check"></span></span>
              Remember Me
            </label>
          </div>
          
          <div class="auth-actions">
            <button type="button" class="btn-google" @click="handleGoogleLogin" :disabled="isLoading" title="Login with Google">
              <span class="mdi mdi-google"></span>
            </button>
            <span class="auth-or">or</span>
            <button type="submit" class="btn-submit btn-signin" :disabled="isLoading">
              {{ isLoading ? '...' : 'SIGN IN' }}
            </button>
          </div>
        </form>

        <!-- ================= REGISTER FORM ================= -->
        <form v-else @submit.prevent="handleRegister" class="auth-form animate-fade-in">
          <div class="form-group">
            <input type="email" v-model="registerEmail" required placeholder="Email" class="auth-input" />
          </div>
          
          <div class="form-group">
            <input type="password" v-model="registerPassword" required placeholder="Password" class="auth-input" />
          </div>
          
          <div class="form-group">
            <input type="password" v-model="registerConfirm" required placeholder="Confirm Password" class="auth-input" />
          </div>
          
          <div class="auth-actions right-align">
            <button type="submit" class="btn-submit btn-register" :disabled="isLoading">
              {{ isLoading ? '...' : 'REGISTER' }}
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  auth, 
  googleProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup 
} from '../firebase'

const router = useRouter()

const activeTab = ref('login')
const isLoading = ref(false)
const errorMsg = ref('')

// Login State
const loginEmail = ref('')
const loginPassword = ref('')
const rememberMe = ref(false)

// Register State
const registerEmail = ref('')
const registerPassword = ref('')
const registerConfirm = ref('')

const handleLogin = async () => {
  if (!loginEmail.value || !loginPassword.value) return
  errorMsg.value = ''
  isLoading.value = true
  
  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    router.push('/dashboard')
  } catch (err) {
    console.error(err)
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
      errorMsg.value = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง'
    } else {
      errorMsg.value = 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ'
    }
  } finally {
    isLoading.value = false
  }
}

const handleRegister = async () => {
  if (registerPassword.value !== registerConfirm.value) {
    errorMsg.value = 'รหัสผ่านไม่ตรงกัน'
    return
  }
  
  errorMsg.value = ''
  isLoading.value = true
  
  try {
    await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
    router.push('/dashboard')
  } catch (err) {
    console.error(err)
    if (err.code === 'auth/email-already-in-use') {
      errorMsg.value = 'อีเมลนี้ถูกใช้งานแล้ว'
    } else if (err.code === 'auth/weak-password') {
      errorMsg.value = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
    } else {
      errorMsg.value = 'เกิดข้อผิดพลาดในการสมัครสมาชิก'
    }
  } finally {
    isLoading.value = false
  }
}

const handleGoogleLogin = async () => {
  errorMsg.value = ''
  isLoading.value = true
  try {
    await signInWithPopup(auth, googleProvider)
    router.push('/dashboard')
  } catch (err) {
    console.error(err)
    if (err.code !== 'auth/popup-closed-by-user') {
      errorMsg.value = 'เกิดข้อผิดพลาดในการล็อกอินด้วย Google'
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-card-container {
  width: 100%;
  max-width: 760px;
  padding: 20px;
}

.login-card {
  display: flex;
  background-color: #3b1d44;
  border-radius: 6px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  overflow: hidden;
  min-height: 400px;
}

/* Base Panel */
.login-panel {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

/* Left Panel */
.login-panel--left {
  background-color: #3b1d44;
  color: #fff;
  border-right: 1px solid rgba(255,255,255,0.05);
  justify-content: space-between;
}

.login-panel__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
}

.login-panel__illustration {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.illustration-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.walk-icon { font-size: 4rem; color: #ffeb3b; }
.traffic-icon { font-size: 3rem; color: #4caf50; }

.crosswalk-stripes {
  display: flex;
  gap: 8px;
  width: 100%;
  height: 20px;
  justify-content: center;
}

.crosswalk-stripes div {
  width: 15%;
  height: 100%;
  background: rgba(255,255,255,0.8);
  transform: skewX(-20deg);
}

.login-panel__footer {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
}

.login-panel__footer a {
  color: #ffb32f;
  text-decoration: underline;
}

/* Right Panel */
.login-panel--right {
  background-color: #3b1d44;
  justify-content: center;
}

.auth-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: flex-end;
}

.auth-tab {
  background: none;
  border: none;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.auth-tab:hover {
  color: rgba(255,255,255,0.8);
}

.auth-tab.active {
  color: #fff;
  border-bottom: 2px solid #fff;
}

.auth-error {
  color: #ff5252;
  font-size: 0.85rem;
  margin-bottom: 15px;
  text-align: right;
  background: rgba(255,82,82,0.1);
  padding: 8px;
  border-radius: 4px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  position: relative;
}

.auth-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding: 8px 0;
  color: #fff;
  font-size: 0.95rem;
  transition: border-color 0.2s ease;
}

.auth-input:focus {
  outline: none;
  border-bottom-color: #fff;
}

.auth-input::placeholder {
  color: rgba(255,255,255,0.5);
}

/* Checkbox */
.remember-group {
  display: flex;
  justify-content: flex-start;
  margin-top: -5px;
}

.remember-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  cursor: pointer;
  user-select: none;
}

.remember-label input {
  display: none;
}

.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 1.5px solid rgba(255,255,255,0.5);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.custom-checkbox .mdi {
  opacity: 0;
  color: #3b1d44;
  font-size: 14px;
}

.remember-label input:checked + .custom-checkbox {
  background: #fff;
  border-color: #fff;
}

.remember-label input:checked + .custom-checkbox .mdi {
  opacity: 1;
}

/* Actions */
.auth-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
}

.auth-actions.right-align {
  justify-content: flex-end;
}

.auth-or {
  color: rgba(255,255,255,0.5);
  font-size: 0.85rem;
}

.btn-google {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  border: none;
  transition: transform 0.2s ease;
}

.btn-google:hover {
  transform: scale(1.1);
}

.btn-google .mdi {
  font-size: 1.2rem;
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.btn-submit {
  padding: 8px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  color: #fff;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-submit:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-signin {
  background: #4caf50;
}

.btn-register {
  background: #ff9800;
}

@media (max-width: 768px) {
  .login-card {
    flex-direction: column;
  }
  
  .login-panel--left {
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 30px;
  }
  
  .login-panel--right {
    padding: 30px;
  }
}
</style>
