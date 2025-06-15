from rest_framework.viewsets import ModelViewSet
from Subscription.api.serializers import SubscriptionSerializer
from Subscription.models import Subscription

class SubscriptionViewSet(ModelViewSet):
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()