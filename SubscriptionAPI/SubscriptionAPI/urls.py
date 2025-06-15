from rest_framework import routers
from django.contrib import admin
from django.urls import path, include
from Customer.api.viewsets import CustomerViewSet
from SubscriptionPlan.api.viewsets import SubscriptionPlanViewSet
from Subscription.api.viewsets import SubscriptionViewSet

router = routers.DefaultRouter()
router.register(r'customers', CustomerViewSet, basename='Customer')
router.register(r'plans', SubscriptionPlanViewSet, basename='SubscriptionPlan')
router.register(r'subscriptions', SubscriptionViewSet, basename='Subscription')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
