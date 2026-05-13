<template>
  <div class="stat-card" :style="{ animationDelay: `${delay}ms` }">
    <div class="stat-card__icon-section">
      <div class="stat-card__icon-wrapper">
        <img :src="icon" :alt="title" class="stat-card__icon" />
      </div>
    </div>
    <div class="stat-card__info-section" :class="`stat-card__info--${color}`">
      <div class="stat-card__title">{{ title }}</div>
      <span class="stat-card__value" :class="{ 'stat-card__value--small': smallText }">
        {{ value }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  value: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, default: 'indigo' },
  smallText: { type: Boolean, default: false },
  delay: { type: Number, default: 0 },
})
</script>

<style scoped>
.stat-card {
  display: flex;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  animation: fadeInUp 0.5s ease-out both;
  transition: all var(--transition-fast);
  height: 100%;
}

.stat-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.stat-card__icon-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  flex-shrink: 0;
  min-width: 90px;
  background: rgba(0, 0, 0, 0.02);
}

.stat-card__icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-card__icon {
  max-width: 56px;
  max-height: 56px;
  object-fit: contain;
  transition: transform var(--transition-fast);
}

.stat-card:hover .stat-card__icon {
  transform: scale(1.1);
}

.stat-card__info-section {
  flex: 1;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.stat-card__info--indigo {
  background: var(--stat-card-gradient-1);
}

.stat-card__info--purple {
  background: var(--stat-card-gradient-2);
}

.stat-card__title {
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 4px;
  line-height: 1.3;
}

.stat-card__value {
  font-size: 1.35rem;
  font-weight: 600;
  color: white;
  line-height: 1.3;
}

.stat-card__value--small {
  font-size: 0.95rem;
  font-weight: 500;
}
</style>
