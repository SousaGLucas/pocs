.PHONY: install
install:
	@echo "== Installing Istio =="
	@istioctl install --set profile=demo -y
	@echo "== =="

	@echo "== Installing Istio Samples Addons =="
	@kubectl apply -f /usr/local/istio/samples/addons
	@echo "== =="

.PHONY: resources
resources:
	@echo "== Creating Istio ingress resources =="
	@kubectl apply -f ingress_resources.yaml
	@echo "== =="

	@echo "== Creating Istio ingress class =="
	@kubectl apply -f ingress_class.yaml
	@echo "== =="

	@echo "== Creating Istio gateway =="
	@kubectl apply -f gateway.yaml
	@echo "== =="

.PHONY: dashboard
dashboard:
	@ISTIO_HOST=