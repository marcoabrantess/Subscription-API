from rest_framework.viewsets import ModelViewSet
from SubscriptionPlan.api.serializers import SubscriptionPlanSerializer
from SubscriptionPlan.models import SubscriptionPlan

class SubscriptionPlanViewSet(ModelViewSet):
    serializer_class = SubscriptionPlanSerializer
    queryset = SubscriptionPlan.objects.all()